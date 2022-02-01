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
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");

  const pageComponents = [
    <div>
      <Login
        setCurrentPage={setCurrentPage}
        setUsername={setUsername}
        setUserpass={setUserpass}
      />
    </div>,
    <div>
      <Home
        setCurrentPage={setCurrentPage}
        username={username}
        userpass={userpass}
      />
    </div>,
    <div>
      <Journal setCurrentPage={setCurrentPage} />
    </div>,
    <div>
      <Interaction setCurrentPage={setCurrentPage} />
    </div>,
    <div>
      <Visualization setCurrentPage={setCurrentPage} />
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
