import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import Main from "./elements/main";
import Header from "./elements/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected_link: "queue" };
    this.changeNav = this.changeNav.bind(this);
  }

  changeNav(_selected_link) {
    this.setState({ selected_link: _selected_link });
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <Navbar
          selected_link={this.state.selected_link}
          chooseLink={this.changeNav}
          className="App-navbar"
        ></Navbar>
        <Main
          selected_link={this.state.selected_link}
          chooseLink={this.changeNav}
          class="App-main"
        ></Main>
        <Footer className="App-footer"></Footer>
      </div>
    );
  }
}

export default App;
