import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button/";
import Grid from "@mui/material/Grid";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";

const InteractionDisplay = ({ entries }) => {
  const emotionlessKeys = [
    "_id",
    "userid",
    "entryname",
    "entry",
    "username",
    "created_at",
  ];
  const emotionOutput = [];

  for (const key in entries) {
    if (emotionlessKeys.includes(key) === false) {
      if (entries[key] > 0) {
        emotionOutput.push([key, entries[key]]);
      }
    }
  }
  return (
    <ThemeProvider theme={ThemeOff}>
      <Button fullWidth variant="contained">
        <Grid container spacing={2}>
          <Grid item xs={1.5}>
            {entries._id}
          </Grid>
          <Grid item xs={5.5}>
            {entries.entry}
            {/* Number( */}
          </Grid>
          <Grid item xs={2}>
            {entries.created_at}
          </Grid>
          <Grid item xs={2.5}>
            {emotionOutput}
            {/* {emotion1 ? ` ${emotion1}` : null}
              {emotionvalue1 ? ` (${emotionvalue1})` : null}
              {emotion2 ? `; ${emotion2}` : null}
              {emotionvalue2 ? ` (${emotionvalue2})` : null}
              {emotion3 ? `; ${emotion3}` : null}
              {emotionvalue3 ? ` (${emotionvalue3})` : null} */}
          </Grid>
        </Grid>
        {/* <h4>Entry Id - {_id}</h4>
        <p> Entry - "{entry.substr(0, 100)}..."; </p>
        <p> Created On - {created_at};</p>
        <p>
        {emotion1 ? `Emotions Tagged - ` : null}
        {emotion1 ? ` ${emotion1}` : null}
        {emotionvalue1 ? ` - (${emotionvalue1})` : null}
        {emotion2 ? `; ${emotion2}` : null}
        {emotionvalue2 ? ` - (${emotionvalue2})` : null}
        {emotion3 ? `; ${emotion3}` : null}
        {emotionvalue3 ? ` - (${emotionvalue3})` : null}
      </p> */}
      </Button>
    </ThemeProvider>
  );
};
export default InteractionDisplay;
