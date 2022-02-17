import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button/";
import Grid from "@mui/material/Grid";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";

const InteractionDisplay = ({
  setCurrentPage,
  entries,
  UpdatedJournalReview,
}) => {
  const emotionlessKeys = [
    "entry_id",
    "userid",
    "entryname",
    "entry",
    "username",
    "created_at",
  ];
  const emotionOutput = [];
  const Gronk = (key, keyValue) => {
    return (
      <div key={key}>
        {key} ({keyValue})
      </div>
    );
  };

  for (const key in entries) {
    if (emotionlessKeys.includes(key) === false) {
      if (entries[key] > 0) {
        emotionOutput.push(Gronk(key, entries[key]));
      }
    }
  }
  const displayDateTime = entries.created_at.split("T");

  const setPage = (newPage) => {
    UpdatedJournalReview(entries);
    setCurrentPage(6);
  };
  return (
    <ThemeProvider theme={ThemeOff}>
      <Grid Container padding=".5rem">
        <Button fullWidth variant="contained" onClick={setPage}>
          <Grid container spacing={2}>
            <Grid key="albedo" item xs={1.5}>
              {entries.entry_id}
            </Grid>
            <Grid key="fuego" item xs={5.5}>
              "{entries.entry}..."
              {/* Number( */}
            </Grid>
            <Grid key="remulak" item xs={2}>
              {displayDateTime[0]}{" "}
              {displayDateTime[1].substr(0, displayDateTime[1].length - 1)}
            </Grid>
            <Grid item xs={2.5}>
              {emotionOutput}
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </ThemeProvider>
  );
};
export default InteractionDisplay;
