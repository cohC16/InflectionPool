import React, { Component, useState, useEffect } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import JournalTagValue2 from "./JournalTagValue2";
import JournalTag2 from "./JournalTag2";

const JournalFields2 = ({
  prepop,
  formFieldEmotions,
  formFieldValues,
  onTagValueChange,
  onTagChange,
  // onEmotionChange,
}) => {
  const [addEmotion, SetAddEmotion] = useState(prepop);

  const plusEmotion = () => {
    if (
      formFieldValues[addEmotion] &&
      formFieldEmotions[addEmotion] &&
      addEmotion < 9
    )
      SetAddEmotion(addEmotion + 1);
  };

  useEffect(() => {
    plusEmotion();
  }, [formFieldEmotions, formFieldValues]);

  const emotionsComponents = [];
  for (let entryindex = 0; entryindex < 1 + addEmotion; entryindex++) {
    emotionsComponents.push(
      <div>
        <JournalTag2
          emotionnumber={entryindex + 1}
          value={formFieldEmotions[entryindex]}
          // onChange={[`${`onTag`}${entryindex}${`Change`}`]}
          onChange={onTagChange[entryindex]}
          // onEmotionChange={onEmotionChange}
        />
        <JournalTagValue2
          name={`${"EmotionValue" + [entryindex]}`}
          value={formFieldValues[entryindex]}
          onChange={onTagValueChange[entryindex]}
          // onChange={`${`onTagValue`}${entryindex}${`Change`}`}
        />
      </div>
    );
  }

  // console.log(entriesComponents.length, displayEntries.length);
  // if ((entriesComponents.length === displayEntries.length) != 0) {
  //   console.log("line51", haveDisplay);
  // }
  return emotionsComponents;
};
export default JournalFields2;
