import React, { Component } from "react";
import EmotionSelector from "./EmotionSelector";
import ToggleHide from "./ToggleHide";
import ToggleButton from "@mui/material/ToggleButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import JournalTag from "../Journal/JournalTag";
import Typography from "@mui/material/Typography";
const EmotionContainer = ({ emotionNumber, value, onChange, onToggle }) => {
  console.log("EmotionContainer", value);
  return (
    <div>
      {/* <Typography alignContent="center">
        Emotion {emotionNumber.toString()}
      </Typography> */}
      <JournalTag
        backgroundColor="brown"
        emotionNumber={emotionNumber}
        value={value}
        onChange={onChange}
      />
      <FormControlLabel
        value="false"
        control={<Checkbox defaultChecked />}
        label=" Show?"
        labelPlacement="end"
        onClick={onToggle}
      />
    </div>
  );
};
export default EmotionContainer;
