import BackButton from "../Buttons/BackButton";
import React, { useState } from "react";
import JournalTag from "./JournalTag";
import JournalTagValue from "./JournalTagValue";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThemeOff from "../ThemeOff";
import { ThemeProvider } from "@mui/material/styles";
const Journal = ({ setCurrentPage, username, _id }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  console.log(_id);
  const [formField, setFormField] = useState({
    entry: "",
    // tags: "",
    userid: _id._id,
    entryname: "ga",
    username: username,
    emotion1: "",
    emotion2: "",
    emotion3: "",
    emotionvalue1: "",
    emotionvalue2: "",
    emotionvalue3: "",
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

  const onFormSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entryname: formField.entryname,
        userid: formField.userid,
        username: formField.username,
        emotion1: formField.emotion1,
        emotion2: formField.emotion2,
        emotion3: formField.emotion3,
        emotionvalue1: Number(formField.emotionvalue1),
        emotionvalue2: Number(formField.emotionvalue2),
        emotionvalue3: Number(formField.emotionvalue3),
        entry: formField.entry,
      }),
    };
    console.log(
      formField.entry,
      ",",
      formField.userid,
      ",",
      formField.entryname,
      ",",
      formField.username,
      ",",
      formField.emotion1,
      ",",
      formField.emotion2,
      ",",
      formField.emotion3,
      ",",
      formField.emotionvalue1,
      ",",
      formField.emotionvalue2,
      ",",
      formField.emotionvalue3
    );
    fetch("/api/entry/create", requestOptions).then((response) =>
      response.json()
    );

    setCurrentPage(2);
  };

  return (
    <div>
      <div>
        <Grid container justifyContent="flex-end">
          <BackButton setCurrentPage={setCurrentPage} />
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
            paddingBottom="rem"
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
          <JournalTag
            name="emotion1"
            value={formField.emotion1}
            onChange={onTag1Change}
          />
          <JournalTagValue
            name="emotionvalue1"
            value={formField.emotionvalue1}
            onChange={onTagValue1Change}
          />
          <p></p>

          <JournalTag
            name="emotion2"
            value={formField.emotion2}
            onChange={onTag2Change}
          />
          <JournalTagValue
            name="emotionvalue2"
            value={formField.emotionvalue2}
            onChange={onTagValue2Change}
          />
          <p></p>
          <JournalTag
            name="emotion3"
            value={formField.emotion3}
            onChange={onTag3Change}
          />
          <JournalTagValue
            name="emotionvalue3"
            value={formField.emotionvalue3}
            onChange={onTagValue3Change}
          />
          <p>
            <Button variant="contained" type="submit" value="Submit Entry">
              Submit Entry
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Journal;
