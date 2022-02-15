import React, { Component, useState, useEffect } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import JournalTag from "./JournalTag";
import JournalTagValue from "./JournalTagValue";

const JournalFields = ({
  formFieldEmotions,
  formFieldValues,
  onTagValueChange,
  onTagChange,
  // onEmotionChange,
}) => {
  const [addEmotion, SetAddEmotion] = useState(0);

  const plusEmotion = () => {
    if (formFieldValues[addEmotion] && formFieldEmotions[addEmotion])
      SetAddEmotion(addEmotion + 1);
    if (formFieldValues[0] == false && formFieldEmotions[0] == false)
      SetAddEmotion(0);
  };

  useEffect(() => {
    plusEmotion();
  }, [formFieldEmotions, formFieldValues]);

  const emotionsComponents = [];
  for (let entryindex = 0; entryindex < 1 + addEmotion; entryindex++) {
    emotionsComponents.push(
      <div key={entryindex - 10}>
        <JournalTag
          key={entryindex}
          emotionnumber={entryindex}
          value={formFieldEmotions[entryindex]}
          // onChange={[`${`onTag`}${entryindex}${`Change`}`]}
          onChange={onTagChange[entryindex]}
          // onEmotionChange={onEmotionChange}
        />
        <JournalTagValue
          key={entryindex + 12}
          name={`${"EmotionValue" + [entryindex]}`}
          value={formFieldValues[entryindex]}
          onChange={onTagValueChange[entryindex]}
          // onChange={`${`onTagValue`}${entryindex}${`Change`}`}
        />
      </div>
    );
  }

  return emotionsComponents;
};
export default JournalFields;
