import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { availableQueues: {}, currentMessage: "" };
  }
  style = {
    backgroundColor: "#fff",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    gridArea: "main",
    background: `linear-gradient(
      0deg,
      #fafcfc 8.29%,
      rgba(232, 234, 234, 0.681237) 37.61%,
      rgba(194, 194, 194, 0) 100.27%
    )`,
  };
  buttonStyle = {
    fontFamily: `'Nunito', 'Sans-serif'`,
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "1em",
    color: "#3b4b52",
    backgroundColor: "#ffd400",
    borderRadius: "20px",
    padding: "4px",
    marginLeft: "4px",
  };
  componentDidMount() {
    this.getAllQueues();
  }
  async getAllQueues() {
    fetch("http://localhost:5150/api")
      .then((queues) => {
        if (queues) {
          queues
            .json()
            .then((queuesObj) => {
              console.log(queuesObj);
              this.setState({ availableQueues: queuesObj });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getNextQueuedMessage(queueName, timeout) {
    fetch("http://localhost:5150/api/" + queueName + "?timeout=" + timeout)
      .then((message) => {
        if (message) {
          message
            .json()
            .then((messageObj) => {
              console.log(messageObj);
              this.setState({ currentMessage: messageObj });
              this.getAllQueues();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={this.style}>
        {this.props.selected_link === "queue" ? (
          <ul style={{ listStyle: "none" }}>
            {Object.keys(this.state.availableQueues).map((key) => (
              <li key={key}>
                {key} - messages:{this.state.availableQueues[key].length}
                <button
                  style={this.buttonStyle}
                  onClick={() => {
                    this.getNextQueuedMessage(key, 100);
                    this.props.chooseLink("messages");
                  }}
                >
                  GO
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <div>
          {this.props.selected_link === "messages"
            ? this.state.currentMessage
            : null}
        </div>
      </div>
    );
  }
}
export default Main;
