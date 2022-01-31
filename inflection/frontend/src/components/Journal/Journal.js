import React, { Component } from "react";
import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import JournalEntry from "./JournalEntry";
import JournalTags from "./JournalTags";

export default class Journal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Journal component</p>
        <ul>
          <li>
            <JournalEntry />
          </li>
          <li>
            <JournalTags />
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
