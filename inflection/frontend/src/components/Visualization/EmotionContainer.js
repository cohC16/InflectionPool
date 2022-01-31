import React, { Component } from "react";
import EmotionSelector from "./EmotionSelector";
import ToggleHide from "./ToggleHide";

export default class EmotionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>EmotionContainer component</p>
        <ul>
          <li>
            <EmotionSelector />
          </li>
          <li>
            <ToggleHide />
          </li>
        </ul>
      </div>
    );
  }
}
