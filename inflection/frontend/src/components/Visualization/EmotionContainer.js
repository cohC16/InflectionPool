import React, { Component } from "react";
import EmotionSelector from "./EmotionSelector";
import ToggleHide from "./ToggleHide";

const EmotionContainer = ({ emotionNumber, value, onChange }) => {
  return (
    <div>
      Emotion {emotionNumber.toString()} :
      <EmotionSelector
        emotionNumber={emotionNumber}
        value={value}
        onChange={onChange}
      />
      <ToggleHide />
    </div>
  );
};
export default EmotionContainer;
