import React from "react";

class Footer extends React.Component {
  style = {
    backgroundColor: "#fff",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    gridArea: "footer",
    background: "#3B4C53",
  };
  render() {
    return <footer style={this.style}>created by Vitali Hanonkin</footer>;
  }
}
export default Footer;
