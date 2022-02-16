import React from "react";
import InteractionButton from "../Buttons/InteractionButton";
import JournalButton from "../Buttons/JournalButton";
import VisualizationButton from "../Buttons/VisualizationButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
      <Box
        paddingTop="1rem"
        paddingBottom="1rem"
        style={{ minHeight: "3.5rem" }}
      >
        <Grid
          bgcolor="#ffebee"
          borderRadius={2}
          paddingTop="1rem"
          display="flex"
          item
          xs={12}
        >
          <Box style={{ minHeight: "2.5rem" }} fontFamily="Montserrat">
               Welcome Home, {nickname}
          </Box>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={0.6} />
        <Grid item xs={11.4}>
          <JournalButton setCurrentPage={setCurrentPage} />
          <p></p>
          <InteractionButton setCurrentPage={setCurrentPage} />
          <p></p>
          <VisualizationButton setCurrentPage={setCurrentPage} />
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
