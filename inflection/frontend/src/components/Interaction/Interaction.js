import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import InteractionDisplay from "./InteractionDisplay";
import InteractionField from "./InteractionField";
import React from "react";

// export default class Journal extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
const Journal = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
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
          <BackButton setCurrentPage={setCurrentPage} />
        </li>
        <li>
          <SubmitButton setCurrentPage={setCurrentPage} />
        </li>
      </ul>
    </div>
  );
};
export default Journal;
