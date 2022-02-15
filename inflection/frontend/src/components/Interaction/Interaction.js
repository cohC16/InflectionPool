import BackButton from "../Buttons/BackButton";
import InteractionDisplay from "./InteractionDisplay";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";

// import { ContactSupportOutlined } from "@material-ui/icons";

const Interaction = ({
  setCurrentPage,
  username,
  nickname,
  email,
  _id,
  UpdatedJournalReview,
}) => {
  const [displayEntries, setDisplayEntries] = useState("");
  const [haveDisplay, setHaveDisplay] = useState([]);
  console.log("Interaction element rendered");

  const setPage = (newPage) => {
    setCurrentPage(1);
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      _id: _id._id,
    }),
  };

  const mountDisplayEntries = () => {
    if (displayEntries === "") {
      fetch("/api/entry/user/all", requestOptions)
        .then((response) => response.json())
        .then((data) => setDisplayEntries(data));
    }
    console.log(displayEntries);
  };
  useEffect(() => {
    mountDisplayEntries();
  }, []);

  const entriesComponents = [];
  if (displayEntries) {
    console.log("line39", displayEntries[0]);
    if (haveDisplay.length == 0) {
      console.log("line41", haveDisplay);
      for (
        let entryindex = 0;
        entryindex < displayEntries.length;
        entryindex++
      ) {
        console.log(
          "displayEntries[entryindex]",
          displayEntries[entryindex]["entry"]
        );
        entriesComponents.push(
          <InteractionDisplay
            key={displayEntries[entryindex]["entry_id"]}
            setCurrentPage={setCurrentPage}
            entries={displayEntries[entryindex]}
            UpdatedJournalReview={UpdatedJournalReview}
          />
        );
      }
      console.log(entriesComponents.length, displayEntries.length);
    }
    if ((entriesComponents.length === displayEntries.length) != 0) {
      console.log("line51", haveDisplay);

      setHaveDisplay(entriesComponents);
    }
  }
  return (
    <div>
      <div>
        <Grid container justifyContent="flex-end">
          <BackButton setCurrentPage={setCurrentPage} />
        </Grid>
        <p> </p>
      </div>

      <ThemeProvider theme={ThemeOff}>
        <Box
          paddingTop="1rem"
          borderRadius={1}
          bgcolor="#ffebee"
          fullWidth
          style={{ minHeight: "3.5rem" }}
        >
          <Grid paddingLeft={3} container spacing={2}>
            <Grid display="flex" justifyContent="center" item xs={1.5}>
              <Box fontFamily="Montserrat">ENTRY ID</Box>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={5.5}>
              <Box fontFamily="Montserrat">ENTRY</Box>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={2}>
              <Box fontFamily="Montserrat">CREATED ON</Box>
            </Grid>
            <Grid display="flex" justifyContent="center" item xs={2.5}>
              <Box fontFamily="Montserrat">EMOTIONS</Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>

      <div>{haveDisplay}</div>
    </div>
  );
};

export default Interaction;
