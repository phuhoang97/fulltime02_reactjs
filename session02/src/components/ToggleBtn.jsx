import React, { Component } from "react";

export default class ToggleBtn extends Component {
  constructor() {
    super();
    this.state = {
      toggleBtn: false,
    };

    // Khai báo từ khóa this trong function
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({ toggleBtn: !this.state.toggleBtn });
  }
  render() {
    return (
      <div>
        <h2>Chào mừng đến với RA</h2>
        {this.state.toggleBtn ? (
          <div>
            <p>Chúc các bạn học tốt</p>
            <button onClick={this.handleShow}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.handleShow}>Show</button>
          </div>
        )}
      </div>
      // toán tử 3 ngôi là từ ES6 trở lên
      // if (a>5) {
      //     console.log("a lớn hơn 5");
      // } else {
      //     console.log("a nhỏ hơn 5");
      // }

      //   Chuyển sang toán tử 3 ngôi
      // a>5 ?  console.log("a lớn hơn 5") : console.log("a nhỏ hơn 5")
      //   this.state.toggleBtn ? (
      //       <div>
      //       <p>Chúc các bạn học tốt</p>
      //       <button onClick={this.handleShow}>Show less</button>
      //     </div>
      //   )
      // : (
      //     <div>
      //       <button onClick={this.handleShow}>Show</button>
      //     </div>
      //   )
    );
  }
}
