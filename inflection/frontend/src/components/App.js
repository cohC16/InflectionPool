import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home/Home";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import Interaction from "./Interaction/Interaction";
import Visualization from "./Visualization/Visualization";
import HomeButton from "./Buttons/HomeButton";
import SubmitButton from "./Buttons/SubmitButton";
import BackButton from "./Buttons/BackButton";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>App.js component</h1>
        <Login />
        <Home />
        <Journal />
        <Interaction />
        <Visualization />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
