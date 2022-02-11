import React, { Component } from "react";
import BackButton from "../Buttons/BackButton";
import DurationButton from "../Buttons/DurationButton";
import HomeButton from "../Buttons/HomeButton";
import SortByButton from "../Buttons/SortByButton";
import EmotionContainer from "./EmotionContainer";
import EmotionSelector from "./EmotionSelector";
import Linegraph from "./Linegraph";
import ToggleHide from "./ToggleHide";

const Visualization = ({ setCurrentPage }) => {
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
          <Linegraph data="data" />
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
};

export default Visualization;
