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
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
const Home = ({ setCurrentPage, username, _id }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>Homepage component {_id}</p>
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
