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
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";

const Home = ({ setCurrentPage, username, _id, nickname }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>Homepage</p>
      <p>Welcome {nickname}</p>
      <JournalButton setCurrentPage={setCurrentPage} />
      <p></p>
      <InteractionButton setCurrentPage={setCurrentPage} />
      <p></p>
      <VisualizationButton setCurrentPage={setCurrentPage} />
      <p></p>
    </div>
  );
};
export default Home;
