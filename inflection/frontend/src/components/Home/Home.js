import React from "react";
import InteractionButton from "../Buttons/InteractionButton";
import JournalButton from "../Buttons/JournalButton";
import VisualizationButton from "../Buttons/VisualizationButton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

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
    // <Router>
    //   <switch>
    //     <Route exact path="/"></Route>
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
      {/* </switch>
    </Router> */}
  );
};
export default Home;
