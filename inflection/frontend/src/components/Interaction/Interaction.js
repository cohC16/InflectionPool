import React, { Component } from "react";
import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import InteractionDisplay from "./InteractionDisplay";
import InteractionField from "./InteractionField";

export default class Interaction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Interaction component</p>
        <ul>
          <li>
            <InteractionDisplay />
          </li>
          <li>
            <InteractionField />
          </li>
          <li>
            <BackButton />
          </li>
          <li>
            <SubmitButton />
          </li>
        </ul>
      </div>
    );
  }
}
