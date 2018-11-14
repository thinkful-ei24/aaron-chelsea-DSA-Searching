import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  library = [
    { author: "Cowlishaw, Mike", dewey: "005.133", title: "The REXX Language" },
    {
      author: "Sams",
      dewey: "005.133",
      title: "Teach Yourself C++ In 21 Days"
    },
    {
      author: "Stroustrup., Bjarne",
      dewey: "005.133",
      title: "The C++ Programming Language"
    },
    {
      author: "Crockford, Douglas",
      dewey: "005.2762",
      title: "JavaScript: The Good Parts"
    },
    {
      author: "Flanagan, David",
      dewey: "005.2762",
      title: "JavaScript: The Definitive Guide"
    },
    {
      author: "Schmidt, Meinhard",
      dewey: "005.44684",
      title: "Windows Vista for Dummies"
    },
    { author: "Zondervan", dewey: "220.52081", title: "NIV Study Bible" },
    {
      author: "Humphries, Russell, Dr.",
      dewey: "231.7652",
      title: "Starlight and Time"
    },
    {
      author: "Jane, Frederick Thomas",
      dewey: "623.82509051",
      title: "Jane's Fighting Ships"
    },
    {
      author: "Norris, Chuck",
      dewey: "796.8092",
      title: "The Official Chuck Norris Fact Book"
    }
  ];

  // We need a dewey and title input
  // Store the dewey code and title in the state

  // filter out the books with dewey codes that don't match using a binary search
  // then do a linear search with the remaing books by title to find the correct book object

  test = [0, 1, 1, 2, 2, 3, 3, 4, 5, 6];

  deweyBinary(dewey, title, start = 0, end = this.library.length - 1) {
    this.setState({ title: title });
    let matchesArray = [];
    dewey = Number(dewey);
    let middle = Math.floor((start + end) / 2);
    if (middle < 0 || middle > this.library.length - 1) {
      return console.log("not found");
    }

    let value = this.library[middle];
    let valueDewey = Number(value.dewey);

    if (start > end) {
      return matchesArray;
    }

    if (valueDewey < dewey) {
      this.deweyBinary(dewey, title, middle + 1, end);
    }
    if (valueDewey > dewey) {
      this.deweyBinary(dewey, title, start, middle - 1);
    }

    if (valueDewey === dewey) {
      matchesArray.push(value);
      for (let i = middle + 1; i < end; i++) {
        value = this.library[i];
        if (valueDewey === dewey) {
          matchesArray.push(value);
        } else {
          break;
        }
      }

      for (let i = middle - 1; i >= 0; i--) {
        value = this.library[i];
        if (valueDewey === dewey) {
          matchesArray.push(value);
        } else {
          break;
        }
      }

      this.setState({ array: matchesArray });
      console.log(this.state);
      return matchesArray;
    }
  }

  renderResults() {
    console.log(this.state);
    if (this.state.array.length === 0) {
      return "";
    }
    console.log(this.state.title);
    let newArr = this.state.array.filter(item => item.title === this.state.title);
    return newArr[0].title;
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <h1>Find a Book</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.deweyBinary(
                e.currentTarget.dewey.value,
                e.currentTarget.title.value
              );
            }}
          >
            <label htmlFor="dewey">Dewey</label>
            <input type="text" name="dewey" />
            <br />
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
            <button type="submit">Search</button>
          </form>
          <p>{this.renderResults()}</p>
        </section>
      </div>
    );
  }
}

export default Book;
