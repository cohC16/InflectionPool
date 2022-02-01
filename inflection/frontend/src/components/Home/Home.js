import React from "react";
import InteractionButton from "../Buttons/InteractionButton";
import JournalButton from "../Buttons/JournalButton";
import VisualizationButton from "../Buttons/VisualizationButton";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
const Home = ({ setCurrentPage, username, userpass }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>Homepage component</p>
      <p>Welcome {username}</p>
      <ul>
        <li>
          <JournalButton setCurrentPage={setCurrentPage} />
        </li>
        <li>
          <InteractionButton setCurrentPage={setCurrentPage} />
        </li>
        <li>
          <VisualizationButton setCurrentPage={setCurrentPage} />
        </li>
      </ul>
    </div>
  );
};
export default Home;
