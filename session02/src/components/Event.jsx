import React, { Component } from "react";
class Event extends Component {
  constructor() {
    super();
    this.state = {
      toggleBtn: false,
    };
    this.handle = this.handle.bind(this);
  }
  handle = () => {
    this.setState({ toggleBtn: !this.state.toggleBtn });
  };
  render() {
    return (
      <>
        {this.state.toggleBtn ? (
          <div>
            <p>bo hoc day</p>
            <button onClick={this.handle}>On</button>
          </div>
        ) : (
          <div>
            <p>thoi lai di hoc vay</p>
            <button onClick={this.handle}>Off</button>
          </div>
        )}
      </>
    );
  }
}

export default Event;
