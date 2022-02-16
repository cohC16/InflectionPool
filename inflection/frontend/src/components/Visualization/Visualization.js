import React, { Component, useState, useEffect } from "react";
import BackButton from "../Buttons/BackButton";
import DurationButton from "../Buttons/DurationButton";
import HomeButton from "../Buttons/HomeButton";
import SortByButton from "../Buttons/SortByButton";
import EmotionContainer from "./EmotionContainer";
import EmotionSelector from "./EmotionSelector";
import Linegraph from "./Linegraph";
import ToggleHide from "./ToggleHide";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

const Visualization = ({ setCurrentPage, username, _id }) => {
  const [formField, setFormField] = useState({
    entry: "",
    userid: _id._id,
    username: username,
    emotion1: "",
    emotion2: "",
    emotion3: "",
    emotion4: "",
    emotion1toggle: true,
    emotion2toggle: true,
    emotion3toggle: true,
    emotion4toggle: true,
  });

  const [graphData, setGraphData] = useState("");
  const [haveDisplay, setHaveDisplay] = useState([]);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      _id: _id._id,
    }),
  };

  const mountDisplayEntries = () => {
    console.log("2");
    if (graphData === "") {
      console.log("3");

      fetch("/api/entry/user/all", requestOptions)
        .then((response) => response.json())
        .then((data) => setGraphData(data));
    }
  };

  useEffect(() => {
    console.log("1");
    console.log(graphData);

    mountDisplayEntries();
  }, [graphData]);

  const entriesComponents = [];
  if (graphData) {
    if (haveDisplay.length == 0) {
      for (let entryindex = 0; entryindex < graphData.length; entryindex++) {
        entriesComponents.push({
          key: graphData[entryindex]["entry_id"],
          setCurrentPage: setCurrentPage,
          entries: graphData[entryindex],
        });
      }
    }
    if ((entriesComponents.length === graphData.length) != 0) {
      setHaveDisplay(entriesComponents);
    }
  }

  const onEntryChange = (event) => {
    setFormField({
      ...formField,
      entry: event.target.value,
    });
  };

  const onToggle1 = (event) => {
    console.log(formField.emotion1toggle);
    setFormField({
      ...formField,
      emotion1toggle: !formField.emotion1toggle,
    });
  };
  const onToggle2 = (event) => {
    setFormField({
      ...formField,
      emotion2toggle: !formField.emotion2toggle,
    });
  };
  const onToggle3 = (event) => {
    setFormField({
      ...formField,
      emotion3toggle: !formField.emotion3toggle,
    });
  };
  const onToggle4 = (event) => {
    setFormField({
      ...formField,
      emotion4toggle: !formField.emotion4toggle,
    });
  };

  const onTag1Change = (event) => {
    setFormField({
      ...formField,
      emotion1: event.target.value,
    });
    console.log("onTag1Change", formField.emotion1);
  };
  const onTag2Change = (event) => {
    setFormField({
      ...formField,
      emotion2: event.target.value,
    });
  };

  const onTag3Change = (event) => {
    setFormField({
      ...formField,
      emotion3: event.target.value,
    });
  };

  const onTag4Change = (event) => {
    setFormField({
      ...formField,
      emotion4: event.target.value,
    });
  };

  return (
    <div>
      <Grid container justifyContent="flex-end">
        <BackButton setCurrentPage={setCurrentPage} />
      </Grid>

      <Box
        paddingTop="0rem"
        paddingBottom="0rem"
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
            paddingTop="0rem"
            style={{ minHeight: "2.5rem" }}
            fontFamily="Montserrat"
          >
               Your Story
          </Box>
        </Grid>
      </Box>

      <Grid container justifyContent="flex-end" spacing={2} columnSpacing={2}>
        <Grid
          bgcolor="#ffebee"
          borderRadius={2}
          paddingTop="1rem"
          display="flex"
          item
          xs={12}
        ></Grid>
      </Grid>
      {/* 
      <SortByButton />

      <DurationButton /> */}

      <Grid
        container
        justifyContent="center"
        bgcolor=""
        borderRadius={2}
        paddingTop="1rem"
        display="flex"
      >
        <Grid item xs={12} height="100">
          <Box paddingLeft="2%">
            <Linegraph
              graphData={graphData}
              emotion1={formField.emotion1}
              emotion2={formField.emotion2}
              emotion3={formField.emotion3}
              emotion4={formField.emotion4}
              toggle1={formField.emotion1toggle}
              toggle2={formField.emotion2toggle}
              toggle3={formField.emotion3toggle}
              toggle4={formField.emotion4toggle}
            />
          </Box>
        </Grid>
        <Grid item xs={0.6} />
        <Grid item xs={5} bgcolor="#" paddingBottom=".6rem">
          <EmotionContainer
            emotionNumber={1}
            name="emotion1"
            value={formField.emotion1}
            onChange={onTag1Change}
            onToggle={onToggle1}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5} justifyContent="center" paddingBottom=".6rem">
          <EmotionContainer
            justifyContent="center"
            emotionNumber={2}
            name="emotion2"
            value={formField.emotion2}
            onChange={onTag2Change}
            onToggle={onToggle2}
          />
        </Grid>
        <Grid item xs={0.6} />
        <Grid item xs={5} justifyContent="center">
          <EmotionContainer
            justifyContent="center"
            emotionNumber={3}
            name="emotion3"
            value={formField.emotion3}
            onChange={onTag3Change}
            onToggle={onToggle3}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5} justifyContent="center">
          <EmotionContainer
            justifyContent="center"
            emotionNumber={4}
            name="emotion4"
            value={formField.emotion4}
            onChange={onTag4Change}
            onToggle={onToggle4}
          />
        </Grid>
      </Grid>
      {/* <HomeButton setCurrentPage={setCurrentPage} /> */}
    </div>
  );
};

export default Visualization;
