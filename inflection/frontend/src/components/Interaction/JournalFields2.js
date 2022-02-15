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
    if (formFieldValues[addEmotion] && formFieldEmotions[addEmotion])
      SetAddEmotion(addEmotion + 1);
  };

  useEffect(() => {
    console.log(addEmotion);
    console.log(formFieldValues[addEmotion]);
    plusEmotion();
  }, [formFieldEmotions, formFieldValues]);

  const emotionsComponents = [];
  for (let entryindex = 0; entryindex < 1 + addEmotion; entryindex++) {
    console.log(formFieldValues[entryindex]);
    emotionsComponents.push(
      <div>
        <JournalTag2
          emotionnumber={entryindex}
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
      // <InteractionDisplay
      //   key={displayEntries[entryindex]._id}
      //   _id={displayEntries[entryindex]._id}
      //   entry={displayEntries[entryindex].entry}
      //   userid={displayEntries[entryindex].userid}
      //   entryname={displayEntries[entryindex].entryname}
      //   created_at={displayEntries[entryindex].created_at}
      //   emotion1={displayEntries[entryindex].emotion1}
      //   emotionvalue1={displayEntries[entryindex].emotionvalue1}
      //   emotion2={displayEntries[entryindex].emotion2}
      //   emotionvalue2={displayEntries[entryindex].emotionvalue2}
      //   emotion3={displayEntries[entryindex].emotion3}
      //   emotionvalue3={displayEntries[entryindex].emotionvalue3}
      // />
    );
  }

  // console.log(entriesComponents.length, displayEntries.length);
  // if ((entriesComponents.length === displayEntries.length) != 0) {
  //   console.log("line51", haveDisplay);
  // }
  return emotionsComponents;
};
export default JournalFields2;
