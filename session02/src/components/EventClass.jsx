import React, { Component } from "react";

export default class EventClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nguyen Van A",
      Job: "Developer",
    };
  }

  handleShowState = () => {
    this.setState({
      name: "Nguyen Van C",
    });
    setTimeout(() => {
      alert("Tên là " + this.state.name);
    }, 1000);
  };

  handleClick1() {
    console.log("Click 01 đang được chạy");
  }

  handleClick2() {
    console.log("Click 02 đang được chạy");
  }

  handleClick3 = (message) => {
    console.log("Click 03 đang được chạy" + message);
  };
  handleClick4 = (message) => {
    console.log("Click 04 đang được chạy" + message);
  };

  render() {
    return (
      <div>
        <h2>Event in React</h2>
        <button onClick={this.handleClick1()}>Click 01</button>
        <button onClick={this.handleClick2}>Click 02</button>
        <button onClick={this.handleClick3("Hello World")}>Click 03</button>
        <button onClick={() => this.handleClick4("Hello World")}>
          Click 04
        </button>

        <div>
          <button onClick={this.handleShowState}>Click Me !!!</button>
        </div>
      </div>
    );
  }
}
