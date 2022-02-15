import BackButton from "../Buttons/BackButton";
import React, { useEffect, useState } from "react";
import JournalTag from "./JournalTag";
import JournalTagValue from "./JournalTagValue";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import ThemeOff from "../ThemeOff";
import JournalFields from "./JournalFields";

const Journal = ({ setCurrentPage, username, _id }) => {
  const [hasSubmitted, setSubmitted] = useState(false);
  const [responseData, SetResponseData] = useState([]);

  const effectCleanup = () => {
    if (hasSubmitted) {
      setCurrentPage(2);
      if (responseData) {
      } else {
        setErrorMessage("Waiting for server response");
      }
    }
  };

  useEffect(() => {
    effectCleanup();
    let mounted = true;
    return function cleanup() {
      mounted = false;
      console.log("unmounted login");
    };
  }, [responseData]);

  const [formField, setFormField] = useState({
    entry: "",
    userid: _id._id,
    entryname: "ga",
    username: username,
    Angry: "",
    Ashamed: "",
    Betrayed: "",
    Bitter: "",
    Brain_Foggy: "",
    Confused: "",
    Content: "",
    Curious: "",
    Disappointed: "",
    Disgusted: "",
    Dissociated: "",
    Embarrassed: "",
    Excited: "",
    Focused: "",
    Frustrated: "",
    Grateful: "",
    Guilty: "",
    Happy: "",
    Hopeful: "",
    Hurt: "",
    Hysterical: "",
    Incredulous: "",
    Jealous: "",
    Lonely: "",
    Moody: "",
    Nauseated: "",
    Numb: "",
    Overwhelmed: "",
    Panicked: "",
    Proud: "",
    Rattled: "",
    Relieved: "",
    Sad: "",
    Scared: "",
    Stressed: "",
    Stuck: "",
    Surprised: "",
    Tired: "",
    Uneasy: "",
    Uncomfortable: "",
    Upset: "",
    Vulnerable: "",
    emotion1: "",
    emotion2: "",
    emotion3: "",
    emotion4: "",
    emotion5: "",
    emotion6: "",
    emotion7: "",
    emotion8: "",
    emotion9: "",
    emotion10: "",
    emotionvalue1: "",
    emotionvalue2: "",
    emotionvalue3: "",
    emotionvalue4: "",
    emotionvalue5: "",
    emotionvalue6: "",
    emotionvalue7: "",
    emotionvalue8: "",
    emotionvalue9: "",
    emotionvalue10: "",
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

  const onTagValue1Change = (event) => {
    setFormField({
      ...formField,
      emotionvalue1: event.target.value,
    });
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

  // const onEmotionChange = (emotion, value) => {
  //   setFormField((formField[emotion] = value));
  // };

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
      }),
    };
    setSubmitted(true);
    fetch("/api/entry/create", requestOptions).then((response) =>
      response.json().then((data) => {
        SetResponseData(data);
      })
    );
  };

  return (
    <div>
      <Grid container justifyContent="flex-end">
        <BackButton setCurrentPage={setCurrentPage} />
      </Grid>

      <Box key="your top" paddingTop="1rem" style={{ minHeight: "3.5rem" }}>
        <Grid
          bgcolor="#ffebee"
          borderRadius={2}
          paddingTop="1rem"
          display="flex"
          item
          xs={12}
        >
          <Box
            key="your thoughts"
            style={{ minHeight: "2.5rem" }}
            fontFamily="Montserrat"
          >
               Your Thoughts
          </Box>
        </Grid>
      </Box>

      <form className="" onSubmit={onFormSubmit}>
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
          key="your empty"
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
            <Box
              key="your feelings"
              style={{ minHeight: "2.5rem" }}
              fontFamily="Montserrat"
            >
                 Your Feelings
            </Box>
          </Grid>
        </Box>
        <JournalFields
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
        ></JournalFields>
        <p>
          <Button variant="contained" type="submit" value="Submit Entry">
            Submit Entry
          </Button>
        </p>
      </form>
    </div>
  );
};
export default Journal;
