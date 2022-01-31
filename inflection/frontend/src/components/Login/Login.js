import React, { Component } from "react";
import ExternalAuth from "./ExternalAuth";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Login component</p>
        <ul>
          <li>
            <ExternalAuth />
          </li>
        </ul>
      </div>
    );
  }
}
