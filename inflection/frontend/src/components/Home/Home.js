import React, { Component } from "react";
import InteractionButton from "../Buttons/InteractionButton";
import JournalButton from "../Buttons/JournalButton";
import VisualizationButton from "../Buttons/VisualizationButton";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Homepage component</p>
        <ul>
          <li>
            <JournalButton />
          </li>
          <li>
            <InteractionButton />
          </li>
          <li>
            <VisualizationButton />
          </li>
        </ul>
      </div>
    );
  }
}
