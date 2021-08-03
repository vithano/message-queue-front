import React from "react";

class Navbar extends React.Component {
  links = ["queue", "messages"];
  style = {
    backgroundColor: "#fff",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    gridArea: "navbar",
    background: `linear-gradient(
      0deg,
      #fafcfc 8.29%,
      rgba(232, 234, 234, 0.681237) 37.61%,
      rgba(194, 194, 194, 0) 100.27%
    )`,
  };
  selectedStyle = {
    backgroundColor: "#3B4C53",
    color: "white",
  };
  render() {
    return (
      <nav style={this.style}>
        <ul style={{ listStyle: "none" }}>
          {this.links.map((link) => (
            <li
              style={{
                borderRadius: "7px",
                padding: "5px",
                margin: "5px",
                ...(this.props.selected_link === link
                  ? this.selectedStyle
                  : null),
              }}
              key={link}
              onClick={() => this.props.chooseLink(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
