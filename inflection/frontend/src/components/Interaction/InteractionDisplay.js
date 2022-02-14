import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button/";
import Grid from "@mui/material/Grid";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";

const InteractionDisplay = ({
  _id,
  entry,
  userid,
  entryname,
  created_at,
  emotion1,
  emotionvalue1,
  emotion2,
  emotionvalue2,
  emotion3,
  emotionvalue3,
}) => {
  return (
    <ThemeProvider theme={ThemeOff}>
      <p>
        <Button fullWidth variant="contained">
          <Grid container spacing={2}>
            <Grid item xs={1.5}>
              {_id}
            </Grid>
            <Grid item xs={5.5}>
              "{entry.substr(0, 100)}..."
            </Grid>
            <Grid item xs={2}>
              {created_at}
            </Grid>
            <Grid item xs={2.5}>
              {emotion1 ? ` ${emotion1}` : null}
              {emotionvalue1 ? ` (${emotionvalue1})` : null}
              {emotion2 ? `; ${emotion2}` : null}
              {emotionvalue2 ? ` (${emotionvalue2})` : null}
              {emotion3 ? `; ${emotion3}` : null}
              {emotionvalue3 ? ` (${emotionvalue3})` : null}
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
      </p>
    </ThemeProvider>
  );
};
export default InteractionDisplay;
