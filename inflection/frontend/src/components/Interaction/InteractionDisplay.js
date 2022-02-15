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

  const setPage = (newPage) => {
    UpdatedJournalReview(entries);
    setCurrentPage(6);
  };
  return (
    <ThemeProvider theme={ThemeOff}>
      <p>
        <Grid Container paddingX=".5rem">
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
        </Grid>
      </p>
    </ThemeProvider>
  );
};
export default InteractionDisplay;
