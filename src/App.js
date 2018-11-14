import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      count: 0,
      array: [89, 30, 25, 32, 72, 70, 51]
    };
  }

  setCount(count) {
    this.setState({ count: count });
  }

  linearSearch(num) {
    this.setState({ num: Number(num) });
    let count = 0;
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] !== Number(num)) {
        count++;
      } else {
        this.setCount(count + 1);
        return console.log(`You found it after ${count + 1} searches`);
      }
    }
    this.setCount(count);
    return console.log(
      `You searched through ${count} items, but that number does not exist in the array`
    );
  }

  result() {
    if (this.state.count === 0) {
      return "";
    }
    if (
      this.state.count === this.state.array.length &&
      this.state.num !== this.state.array[this.state.array.length - 1]
    ) {
      console.log(this.state.array[this.state.array.length - 1], this.state.num)
      return `You searched through all ${
        this.state.count
      } of the items, and did not find the number`;
    } else {
      return `You searched through ${
        this.state.count
      } items and found the number`;
    }
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <h1>Linear / Binary Search</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.linearSearch(e.currentTarget.inputNum.value);
            }}
          >
            <input type="number" name="inputNum" />
            <button type="submit">Linear</button>
          </form>
          <p>{this.result()}</p>
        </section>
      </div>
    );
  }
}

export default App;
