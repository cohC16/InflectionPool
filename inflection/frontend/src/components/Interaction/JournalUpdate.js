import BackButton from "../Buttons/BackButton";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";
import JournalFields2 from "./JournalFields2";
import JournalTagValue2 from "./JournalTagValue2";
import BackToInteractionButton from "../Buttons/BackToInteractionButton";
import DeleteEntryButton from "../Buttons/DeleteEntryButton";

const JournalUpdate = ({
  setCurrentPage,
  username,
  _id,
  UpdatedJournalReview,
  reviewData,
}) => {
  const emotionOutput = [];
  const emotionlessKeys = [
    "entry_id",
    "userid",
    "entryname",
    "entry",
    "username",
    "created_at",
  ];
  let prepop = 0;
  for (const key in reviewData) {
    if (emotionlessKeys.includes(key) === false) {
      if (reviewData[key] > 0) {
        emotionOutput.push([key, reviewData[key]]);
        prepop += 1;
      }
    }
  }
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");
  emotionOutput.push("", "");

  const setPage = (newPage) => {
    setCurrentPage(4);
  };
  const [formField, setFormField] = useState({
    entry: reviewData.entry,
    // tags: "",
    entry_id: reviewData.entry_id,
    userid: _id._id,
    entryname: "ga",
    username: username,
    Angry: reviewData.Angry,
    Ashamed: reviewData.Ashamed,
    Betrayed: reviewData.Betrayed,
    Bitter: reviewData.Bitter,
    Brain_Foggy: reviewData.Brain_Foggy,
    Confused: reviewData.Confused,
    Content: reviewData.Content,
    Curious: reviewData.Curious,
    Disappointed: reviewData.Disappointed,
    Disgusted: reviewData.Disgusted,
    Dissociated: reviewData.Dissociated,
    Embarrassed: reviewData.Embarrassed,
    Excited: reviewData.Excited,
    Focused: reviewData.Focused,
    Frustrated: reviewData.Frustrated,
    Grateful: reviewData.Grateful,
    Guilty: reviewData.Guilty,
    Happy: reviewData.Happy,
    Hopeful: reviewData.Hopeful,
    Hurt: reviewData.Hurt,
    Hysterical: reviewData.Hysterical,
    Incredulous: reviewData.Incredulous,
    Jealous: reviewData.Jealous,
    Lonely: reviewData.Lonely,
    Moody: reviewData.Moody,
    Nauseated: reviewData.Nauseated,
    Numb: reviewData.Numb,
    Overwhelmed: reviewData.Overwhelmed,
    Panicked: reviewData.Panicked,
    Proud: reviewData.Proud,
    Rattled: reviewData.Rattled,
    Relieved: reviewData.Relieved,
    Sad: reviewData.Sad,
    Scared: reviewData.Scared,
    Stressed: reviewData.Stressed,
    Stuck: reviewData.Stuck,
    Surprised: reviewData.Surprised,
    Tired: reviewData.Tired,
    Uneasy: reviewData.Uneasy,
    Uncomfortable: reviewData.Uncomfortable,
    Upset: reviewData.Upset,
    Vulnerable: reviewData.Vulnerable,
    deleteEntry: "Delete Entry",
    emotion1: emotionOutput[0][0],
    emotion2: emotionOutput[1][0],
    emotion3: emotionOutput[2][0],
    emotion4: emotionOutput[3][0],
    emotion5: emotionOutput[4][0],
    emotion6: emotionOutput[5][0],
    emotion7: emotionOutput[6][0],
    emotion8: emotionOutput[7][0],
    emotion9: emotionOutput[8][0],
    emotion10: emotionOutput[9][0],
    emotionvalue1: emotionOutput[0][1],
    emotionvalue2: emotionOutput[1][1],
    emotionvalue3: emotionOutput[2][1],
    emotionvalue4: emotionOutput[3][1],
    emotionvalue5: emotionOutput[4][1],
    emotionvalue6: emotionOutput[5][1],
    emotionvalue7: emotionOutput[6][1],
    emotionvalue8: emotionOutput[7][1],
    emotionvalue9: emotionOutput[8][1],
    emotionvalue10: emotionOutput[9][1],
  });

  // emotionChangeArray[emotionCounter] = key;
  // valueChangeArray[emotionCounter] = reviewData[key];
  // emotionCounter += 1;
  // }

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

  const onTagValue1Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue1: event.target.value,
    });
    // onEmotionChange(formField.emotion1, formField.emotionvalue1);
  };
  const onTag2Change = (event) => {
    setFormField({
      ...formField,
      emotion2: event.target.value,
    });
  };
  const onTagValue2Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue2: event.target.value,
    });
  };
  const onTag3Change = (event) => {
    setFormField({
      ...formField,
      emotion3: event.target.value,
    });
  };
  const onTagValue3Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue3: event.target.value,
    });
  };
  const onTag4Change = (event) => {
    setFormField({
      ...formField,
      emotion4: event.target.value,
    });
  };

  const onTagValue4Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue4: event.target.value,
    });
  };
  const onTag5Change = (event) => {
    setFormField({
      ...formField,
      emotion5: event.target.value,
    });
  };
  const onTagValue5Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue5: event.target.value,
    });
  };
  const onTag6Change = (event) => {
    setFormField({
      ...formField,
      emotion6: event.target.value,
    });
  };
  const onTagValue6Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue6: event.target.value,
    });
  };
  const onTag7Change = (event) => {
    setFormField({
      ...formField,
      emotion7: event.target.value,
    });
  };
  const onTagValue7Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue7: event.target.value,
    });
  };
  const onTag8Change = (event) => {
    setFormField({
      ...formField,
      emotion8: event.target.value,
    });
  };
  const onTagValue8Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue8: event.target.value,
    });
  };
  const onTag9Change = (event) => {
    setFormField({
      ...formField,
      emotion9: event.target.value,
    });
  };
  const onTagValue9Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue9: event.target.value,
    });
  };
  const onTag10Change = (event) => {
    setFormField({
      ...formField,
      emotion10: event.target.value,
    });
  };
  const onTagValue10Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue10: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (formField.emotion1) {
      setFormField((formField[formField.emotion1] = formField.emotionvalue1));
    }
    if (formField.emotion2) {
      setFormField((formField[formField.emotion2] = formField.emotionvalue2));
    }
    if (formField.emotion3) {
      setFormField((formField[formField.emotion3] = formField.emotionvalue3));
    }
    if (formField.emotion5) {
      setFormField((formField[formField.emotion5] = formField.emotionvalue5));
    }
    if (formField.emotion4) {
      setFormField((formField[formField.emotion4] = formField.emotionvalue4));
    }
    if (formField.emotion6) {
      setFormField((formField[formField.emotion6] = formField.emotionvalue6));
    }
    if (formField.emotion7) {
      setFormField((formField[formField.emotion7] = formField.emotionvalue7));
    }
    if (formField.emotion8) {
      setFormField((formField[formField.emotion8] = formField.emotionvalue8));
    }
    if (formField.emotion9) {
      setFormField((formField[formField.emotion9] = formField.emotionvalue9));
    }
    if (formField.emotion10) {
      setFormField((formField[formField.emotion10] = formField.emotionvalue10));
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entry_id: reviewData.entry_id,
        entryname: formField.entryname,
        userid: formField.userid,
        username: formField.username,
        entry: formField.entry,
        Angry: Number(formField.Angry),
        Ashamed: Number(formField.Ashamed),
        Betrayed: Number(formField.Betrayed),
        Bitter: Number(formField.Bitter),
        Brain_Foggy: Number(formField.Brain_Foggy),
        Confused: Number(formField.Confused),
        Content: Number(formField.Content),
        Curious: Number(formField.Curious),
        Disappointed: Number(formField.Disappointed),
        Disgusted: Number(formField.Disgusted),
        Dissociated: Number(formField.Dissociated),
        Embarrassed: Number(formField.Embarrassed),
        Excited: Number(formField.Excited),
        Focused: Number(formField.Focused),
        Frustrated: Number(formField.Frustrated),
        Grateful: Number(formField.Grateful),
        Guilty: Number(formField.Guilty),
        Happy: Number(formField.Happy),
        Hopeful: Number(formField.Hopeful),
        Hurt: Number(formField.Hurt),
        Hysterical: Number(formField.Hysterical),
        Incredulous: Number(formField.Incredulous),
        Jealous: Number(formField.Jealous),
        Lonely: Number(formField.Lonely),
        Moody: Number(formField.Moody),
        Nauseated: Number(formField.Nauseated),
        Numb: Number(formField.Numb),
        Overwhelmed: Number(formField.Overwhelmed),
        Panicked: Number(formField.Panicked),
        Proud: Number(formField.Proud),
        Rattled: Number(formField.Rattled),
        Relieved: Number(formField.Relieved),
        Sad: Number(formField.Sad),
        Scared: Number(formField.Scared),
        Stressed: Number(formField.Stressed),
        Stuck: Number(formField.Stuck),
        Surprised: Number(formField.Surprised),
        Tired: Number(formField.Tired),
        Uneasy: Number(formField.Uneasy),
        Uncomfortable: Number(formField.Uncomfortable),
        Upset: Number(formField.Upset),
        Vulnerable: Number(formField.Vulnerable),
        created_at: reviewData.created_at,
        deleteEntry: formField.deleteEntry,
      }),
    };
    fetch("/api/entry/update", requestOptions).then((response) =>
      response.json().then(setCurrentPage(4))
    );
  };

  const onClickCallback = (event) => {
    event.preventDefault();
    if (formField.deleteEntry === "Delete Entry") {
      setFormField({
        ...formField,
        deleteEntry: "DELETE",
      });
    } else {
      onFormSubmit(event);
    }
  };
  // useEffect(() => {
  //   mountDisplayEmotions();
  // }, []);

  return (
    <div>
      <div>
        <Grid container justifyContent="flex-end">
          <BackToInteractionButton setCurrentPage={setCurrentPage} />
        </Grid>

        <Box paddingTop="1rem" style={{ minHeight: "3.5rem" }}>
          <Grid
            bgcolor="#ffebee"
            borderRadius={2}
            paddingTop="1rem"
            display="flex"
            item
            xs={12}
          >
            <Box style={{ minHeight: "2.5rem" }} fontFamily="Montserrat">
                 Your Thoughts
            </Box>
          </Grid>
        </Box>

        <form onSubmit={onFormSubmit}>
          <p>
            <textarea
              style={{
                width: "95%",
                height: "10rem",
                fontFamily: "Montserrat",
              }}
              name="entry"
              required={true}
              value={formField.entry}
              onChange={onEntryChange}
              maxLength={3000}
              placeholder="Today..."
            />
          </p>

          <Box
            paddingBottom=".7rem"
            paddingTop="0rem"
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
                   Your Feelings
              </Box>
            </Grid>
          </Box>
          <JournalFields2
            prepop={prepop}
            formFieldEmotions={[
              formField.emotion1,
              formField.emotion2,
              formField.emotion3,
              formField.emotion4,
              formField.emotion5,
              formField.emotion6,
              formField.emotion7,
              formField.emotion8,
              formField.emotion9,
              formField.emotion10,
            ]}
            formFieldValues={[
              formField.emotionvalue1,
              formField.emotionvalue2,
              formField.emotionvalue3,
              formField.emotionvalue4,
              formField.emotionvalue5,
              formField.emotionvalue6,
              formField.emotionvalue7,
              formField.emotionvalue8,
              formField.emotionvalue9,
              formField.emotionvalue10,
            ]}
            onTagValueChange={[
              onTagValue1Change,
              onTagValue2Change,
              onTagValue3Change,
              onTagValue4Change,
              onTagValue5Change,
              onTagValue6Change,
              onTagValue7Change,
              onTagValue8Change,
              onTagValue9Change,
              onTagValue10Change,
            ]}
            onTagChange={[
              onTag1Change,
              onTag2Change,
              onTag3Change,
              onTag4Change,
              onTag5Change,
              onTag6Change,
              onTag7Change,
              onTag8Change,
              onTag9Change,
              onTag10Change,
            ]}
            // onEmotionChange={onEmotionChange}
          ></JournalFields2>

          <p>
            <Button variant="contained" type="submit" value="Submit Entry">
              Submit Entry
            </Button>
          </p>
          <DeleteEntryButton
            onClickCallback={onClickCallback}
            text={formField.deleteEntry}
          />
        </form>
      </div>
    </div>
  );
};
export default JournalUpdate;
