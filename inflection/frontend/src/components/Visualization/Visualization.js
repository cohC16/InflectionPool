import React, { Component } from "react";
import BackButton from "../Buttons/BackButton";
import DurationButton from "../Buttons/DurationButton";
import HomeButton from "../Buttons/HomeButton";
import SortByButton from "../Buttons/SortByButton";
import EmotionContainer from "./EmotionContainer";
import EmotionSelector from "./EmotionSelector";
import Linegraph from "./Linegraph";
import ToggleHide from "./ToggleHide";

export default class Visualization extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Visualization component</p>
        <ul>
          <li>
            <SortByButton />
          </li>
          <li>
            <DurationButton />
          </li>
          <li>
            <Linegraph />
          </li>
          <li>
            <EmotionContainer />
          </li>
          <li>
            <EmotionContainer />
          </li>
          <li>
            <EmotionContainer />
          </li>
          <li>
            <EmotionContainer />
          </li>
          <li>
            <BackButton setCurrentPage={setCurrentPage} />
          </li>
          <li>
            <HomeButton setCurrentPage={setCurrentPage} />
          </li>
        </ul>
      </div>
    );
  }
}
