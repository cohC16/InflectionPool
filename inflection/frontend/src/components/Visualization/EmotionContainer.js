import React, { Component } from "react";
import EmotionSelector from "./EmotionSelector";
import ToggleHide from "./ToggleHide";
import ToggleButton from "@mui/material/ToggleButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const EmotionContainer = ({ emotionNumber, value, onChange }) => {
  return (
    <div>
      <FormControlLabel
        value="true"
        control={<Checkbox defaultChecked />}
        label="Toggle Hide"
        lablePlacement="bottom"
      />
      Emotion {emotionNumber.toString()} :
      <EmotionSelector
        emotionNumber={emotionNumber}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default EmotionContainer;
