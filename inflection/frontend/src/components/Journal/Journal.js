import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import JournalEntry from "./JournalEntry";
import JournalTags from "./JournalTags";
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
      <p>Journal component</p>
      <ul>
        <li>
          <JournalEntry />
        </li>
        <li>
          <JournalTags />
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
