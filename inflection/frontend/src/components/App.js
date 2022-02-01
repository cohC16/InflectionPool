import React, { Component, useState } from "react";
import { render } from "react-dom";
import Home from "./Home/Home";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import Interaction from "./Interaction/Interaction";
import Visualization from "./Visualization/Visualization";
import HomeButton from "./Buttons/HomeButton";
import SubmitButton from "./Buttons/SubmitButton";
import BackButton from "./Buttons/BackButton";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userInfo, setUserInfo] = useState(["username1", "password1"]);
  const pageComponents = [
    <div>
      <Login setCurrentPage={setCurrentPage} />
    </div>,
    <div>
      <Home />
    </div>,
    <div>
      <Journal />
    </div>,
    <div>
      <Interaction />
    </div>,
    <div>
      <Visualization />
    </div>,
  ];
  return pageComponents[currentPage];
  // <div>
  //   <h1>App.js component</h1>
  //   <Login />
  //   <Home />
  //   <Journal />
  //   <Interaction />
  //   <Visualization />
  // </div>
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
