// import React, { Component } from "react";
// // import ChildComp from "./components/ChildComp";
// import "./App.css";
// import ToggleBtn from "./components/ToggleBtn";
// export default class App extends Component {
//   render() {
//     // const title = "Hello world";
//     return (
//       <div className='App'>
//         {/*
//         company={"Rikkei Academy"}
//         company => tên của props
//         {"Rikkei Academy"} là giá trị của props

//         Khái niệm :
//         là 1 từ viết ngắn gọn của properties, nhưng lại là 1 khái niệm trong ReactJS.
//         props là 1 đối tượng, nó lưu trữ các giá trị của các attribute (thuộc tính)
//         của một thẻ (Tag).Là cách mà component có thể nhận được các giá trị của thuộc
//         tính truyền vào từ bên ngoài vào, và là cách mà các component có thể nói chuyện với nhau.
//         */}

//         {/* <ChildComp company={"Rikkei Academy"} title={title}>
//           Javascript 02
//         </ChildComp> */}

//         <ToggleBtn />
//       </div>
//     );
//   }
// }

import React from "react";
import "./App.css";
// import EventClass from "./components/EventClass";
import Event from "./components/Event";
// import Header from "./components/Header";
// import ListItems from "./components/ListItems";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <Header />
        <ListItems /> */}
        <Event></Event>
        {/* <EventClass /> */}
      </div>
    );
  }
}

export default App;
