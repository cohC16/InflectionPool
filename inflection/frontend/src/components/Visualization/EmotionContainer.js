import React, { Component } from "react";
import EmotionSelector from "./EmotionSelector";
import ToggleHide from "./ToggleHide";
import ToggleButton from "@mui/material/ToggleButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import JournalTag from "../Journal/JournalTag";
import Typography from "@mui/material/Typography";
const EmotionContainer = ({ emotionNumber, value, onChange }) => {
  return (
    <div>
      {/* <Typography alignContent="center">
        Emotion {emotionNumber.toString()}
      </Typography> */}
      <JournalTag
        alignContent="center"
        backgroundColor="#552277"
        emotionNumber={emotionNumber}
        value={value}
        onChange={onChange}
      />
      <FormControlLabel
        alignContent="center"
        value="true"
        control={<Checkbox defaultChecked />}
        label=" Toggle Hide"
        labelPlacement="right"
      />
    </div>
  );
};
export default EmotionContainer;
