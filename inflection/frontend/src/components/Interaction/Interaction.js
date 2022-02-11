import BackButton from "../Buttons/BackButton";
import SubmitButton from "../Buttons/SubmitButton";
import InteractionDisplay from "./InteractionDisplay";
import InteractionField from "./InteractionField";
import React, { useEffect, useState } from "react";
import { ContactSupportOutlined } from "@material-ui/icons";

const Interaction = ({ setCurrentPage, username, nickname, email, _id }) => {
  const [displayEntries, setDisplayEntries] = useState("");
  const [haveDisplay, setHaveDisplay] = useState([]);
  console.log("Interaction element rendered");

  const setPage = (newPage) => {
    setCurrentPage(1);
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      _id: _id._id,
    }),
  };

  const mountDisplayEntries = () => {
    if (displayEntries === "") {
      fetch("/api/entry/user/all", requestOptions)
        .then((response) => response.json())
        .then((data) => setDisplayEntries(data));
    }
  };
  useEffect(() => {
    mountDisplayEntries();
  }, []);

  const entriesComponents = [];
  if (displayEntries) {
    console.log("line39", haveDisplay);
    if (haveDisplay.length == 0) {
      console.log("line41", haveDisplay);
      for (
        let entryindex = 0;
        entryindex < displayEntries.length;
        entryindex++
      ) {
        entriesComponents.push(
          <InteractionDisplay
            key={displayEntries[entryindex]._id}
            _id={displayEntries[entryindex]._id}
            entry={displayEntries[entryindex].entry}
            userid={displayEntries[entryindex].userid}
            entryname={displayEntries[entryindex].entryname}
            created_at={displayEntries[entryindex].created_at}
            emotion1={displayEntries[entryindex].emotion1}
            emotionvalue1={displayEntries[entryindex].emotionvalue1}
            emotion2={displayEntries[entryindex].emotion2}
            emotionvalue2={displayEntries[entryindex].emotionvalue2}
            emotion3={displayEntries[entryindex].emotion3}
            emotionvalue3={displayEntries[entryindex].emotionvalue3}
          />
        );
      }
      console.log(entriesComponents.length, displayEntries.length);
    }
    if ((entriesComponents.length === displayEntries.length) != 0) {
      console.log("line51", haveDisplay);

      setHaveDisplay(entriesComponents);
    }
  }
  return (
    <div>
      <p>~Your Entries~</p>
      <div>{haveDisplay}</div>
      <BackButton setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Interaction;
