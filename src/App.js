import React, { Component } from "react";
import "./App.css";
import Search from "./binary-search-component";
import Book from "./book-component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Search />
        <Book />
      </React.Fragment>
    );
  }
}

export default App;
