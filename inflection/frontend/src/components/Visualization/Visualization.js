import React, { Component, useState } from "react";
import BackButton from "../Buttons/BackButton";
import DurationButton from "../Buttons/DurationButton";
import HomeButton from "../Buttons/HomeButton";
import SortByButton from "../Buttons/SortByButton";
import EmotionContainer from "./EmotionContainer";
import EmotionSelector from "./EmotionSelector";
import Linegraph from "./Linegraph";
import ToggleHide from "./ToggleHide";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

const Visualization = ({ setCurrentPage, username, _id }) => {
  const [formField, setFormField] = useState({
    entry: "",
    userid: _id._id,
    username: username,
    emotion1: "",
    emotion2: "",
    emotion3: "",
    emotion4: "",
    emotion1toggle: true,
    emotion2toggle: true,
    emotion3toggle: true,
    emotion4toggle: true,
  });

  const onEntryChange = (event) => {
    setFormField({
      ...formField,
      entry: event.target.value,
    });
  };

  const onTag1Change = (event) => {
    setFormField({
      ...formField,
      emotion1: event.target.value,
    });
  };
  const onTag2Change = (event) => {
    setFormField({
      ...formField,
      emotion2: event.target.value,
    });
  };

  const onTag3Change = (event) => {
    setFormField({
      ...formField,
      emotion3: event.target.value,
    });
  };

  const onTag4Change = (event) => {
    setFormField({
      ...formField,
      emotion4: event.target.value,
    });
  };

  return (
    <div>
      <Grid container justifyContent="flex-end">
        <BackButton setCurrentPage={setCurrentPage} />
      </Grid>

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
               Your Story
          </Box>
        </Grid>
      </Box>

      <Grid container justifyContent="flex-end">
        <Grid
          bgcolor="#ffebee"
          borderRadius={2}
          paddingTop="1rem"
          display="flex"
          item
          xs={12}
        ></Grid>
      </Grid>
      <ul>
        <li>
          <SortByButton />
        </li>
        <li>
          <DurationButton />
        </li>

        <Linegraph />

        <li>
          <EmotionContainer
            emotionNumber={1}
            name="emotion1"
            value={formField.emotion1}
            onChange={onTag1Change}
          />
        </li>
        <li>
          <EmotionContainer
            emotionNumber={2}
            name="emotion2"
            value={formField.emotion2}
            onChange={onTag2Change}
          />
        </li>
        <li>
          <EmotionContainer
            emotionNumber={3}
            name="emotion3"
            value={formField.emotion3}
            onChange={onTag3Change}
          />
        </li>
        <li>
          <EmotionContainer
            emotionNumber={4}
            name="emotion4"
            value={formField.emotion4}
            onChange={onTag4Change}
          />
        </li>
        <li>
          <HomeButton setCurrentPage={setCurrentPage} />
        </li>
      </ul>
    </div>
  );
};

export default Visualization;
