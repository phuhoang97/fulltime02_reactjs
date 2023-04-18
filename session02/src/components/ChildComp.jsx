import React, { Component } from "react";

export default class ChildComp extends Component {
  // Khởi tạo constructor
  constructor() {
    // Khai báo super
    super();
    // Khai báo state
    this.state = {
      studentA: "Chị Hạnh",
      studentB: "Quân",
      address: {
        city: "Hà Nội",
      },
    };
  }

  handleClick = () => {
    console.log("Click");
    // Để cập nhật lại state thì chúng ta dùng setState
    this.setState({
      studentA: "Anh Đức",
    });
  };
  render() {
    console.log("Component được render");

    return (
      <div>
        <h4>{this.props.company}</h4>
        <h4>{this.props.title}</h4>
        <h4>{this.props.children}</h4>

        {/* 
        State là 1 đối tượng (Object). State thay đổi thì component render lại
        Để thay đổi state sử dụng phương thức setState() và state chỉ được sử dụng 
        trong component sinh ra nó
        */}
        <h2>{this.state.studentA} đi chơi tăng 3 không rủ</h2>
        <h2>{this.state.studentB} Local Boy</h2>
        <p>{this.state.address.city}</p>
        <button onClick={this.handleClick}>Click Me !!!</button>
      </div>
    );
  }
}
