import React from "react";

class Header extends React.Component {
  style = {
    alignItems: "center",
    background: "#ffd400",
    fontSize: "calc(20px + 2vmin)",
    color: "black",
    display: "flex",
    justifyContent: "center",
    gridArea: "header",
  };
  render() {
    return <header style={this.style}>cool message queue</header>;
  }
}
export default Header;
