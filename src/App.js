import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      linearCount: 0,
      binaryCount: 0,
      lastBinary: 0,
      array: [89, 30, 25, 32, 72, 70, 51]
    };
  }

  // linear search functions
  linearSetCount(count) {
    this.setState({ linearCount: count });
  }

  linearSearch(num) {
    this.setState({ num: num });
    let count = 0;
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] !== num) {
        count++;
      } else {
        this.linearSetCount(count + 1);
        return console.log(`You found it after ${count + 1} searches`);
      }
    }
    this.linearSetCount(count);
    return console.log(
      `You searched through ${count} items, but that number does not exist in the array`
    );
  }

  //binary search functions

  binarySetCount(count) {
    this.setState({ binaryCount: count });
  }

  binarySearch(num, start = 0, end = this.state.array.length - 1) {
    let count = 0;
    let sortedArray = this.state.array.sort();
    let middle = Math.floor((start + end) / 2);
    console.log(count);
    if (start > end) return this.binarySetCount(count + 1);

    //if the last item in array is equal to our num then set our lastBinary state equal to value
    if (start === end) return this.setState({ lastBinary: sortedArray[start] });

    if (num === sortedArray[middle]) {
      return (
        this.binarySetCount(count + 1),
        this.setState({ lastBinary: sortedArray[middle] })
      );
    }

    if (num < middle) {
      count++;
      return this.binarySearch(num, start, sortedArray[middle - 1]);
    }

    if (num > middle) {
      count++;
      return this.binarySearch(num, sortedArray[middle + 1], end);
    }
  }

  // result for both linear and binary
  result() {
    if (this.state.binaryCount === 0) {
      return '';
    }
    if (
      this.state.linearCount === this.state.array.length &&
      this.state.num !== this.state.array[this.state.array.length - 1]
    ) {
      return `Linear: You searched through ${
        this.state.linearCount
      } of the items but did not find the number. Binary: You searched through ${
        this.state.binaryCount
      } of the items but didn't find the number. `;
    } else {
      return `Linear: You searched through ${
        this.state.linearCount
      } items and found the number. Binary: Linear: You searched through ${
        this.state.binaryCount
      } items n f the number `;
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
              this.linearSearch(Number(e.currentTarget.inputNum.value));
              this.binarySearch(Number(e.currentTarget.inputNum.value));
            }}
          >
            <input type="number" name="inputNum" />
            <button type="submit">Submit</button>
          </form>
          <p>{this.result()}</p>
        </section>
      </div>
    );
  }
}

export default App;
