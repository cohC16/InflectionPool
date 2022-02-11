import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import JournalEntry from "./JournalEntry";
import JournalTags from "./JournalTag";
import React, { useState } from "react";
import JournalTag from "./JournalTag";
import JournalTagValue from "./JournalTagValue";

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
        <p>Create New Entry, {_id.nickname}</p>
        <form className="" onSubmit={onFormSubmit}>
          <p>
            <label>Today, </label>
          </p>
          <p>
            <textarea
              style={{ width: "95%", height: "10rem" }}
              name="entry"
              required={true}
              value={formField.entry}
              onChange={onEntryChange}
              maxLength={3000}
              placeholder="Your entry goes here. "
            />
          </p>
          <p>
            <label>I felt... </label>
          </p>
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
            <input type="submit" value="Submit Entry" />
          </p>
        </form>
      </div>
      <BackButton setCurrentPage={setCurrentPage} />
    </div>
  );
};
export default Journal;
