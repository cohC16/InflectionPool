import React, { Component } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const JournalTag2 = ({ name, value, onChange }) => {
  return (
    <span>
      <FormControl sx={{ m: 0.6, minWidth: 200 }}>
        <InputLabel>Emotion</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          name="emotion1"
          required={false}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="Angry">Angry</MenuItem>
          <MenuItem value="Ashamed">Ashamed</MenuItem>
          <MenuItem value="Betrayed">Betrayed</MenuItem>
          <MenuItem value="Bitter">Bitter</MenuItem>
          <MenuItem value="Brain_Foggy">Brain Foggy</MenuItem>
          <MenuItem value="Confused">Confused</MenuItem>
          <MenuItem value="Content">Content</MenuItem>
          <MenuItem value="Curious">Curious</MenuItem>
          <MenuItem value="Disappointed">Disappointed</MenuItem>
          <MenuItem value="Disgusted">Disgusted</MenuItem>
          <MenuItem value="Dissociated">Dissociated</MenuItem>
          <MenuItem value="Embarrassed">Embarrassed</MenuItem>
          <MenuItem value="Excited">Excited</MenuItem>
          <MenuItem value="Focused">Focused</MenuItem>
          <MenuItem value="Frustrated">Frustrated</MenuItem>
          <MenuItem value="Grateful">Grateful</MenuItem>
          <MenuItem value="Guilty">Guilty</MenuItem>
          <MenuItem value="Happy">Happy</MenuItem>
          <MenuItem value="Hopeful">Hopeful</MenuItem>
          <MenuItem value="Hurt">Hurt</MenuItem>
          <MenuItem value="Hysterical">Hysterical</MenuItem>
          <MenuItem value="Incredulous">Incredulous</MenuItem>
          <MenuItem value="Jealous">Jealous</MenuItem>
          <MenuItem value="Lonely">Lonely</MenuItem>
          <MenuItem value="Moody">Moody</MenuItem>
          <MenuItem value="Nauseated">Nauseated</MenuItem>
          <MenuItem value="Numb">Numb</MenuItem>
          <MenuItem value="Overwhelmed">Overwhelmed</MenuItem>
          <MenuItem value="Panicked">Panicked</MenuItem>
          <MenuItem value="Proud">Proud</MenuItem>
          <MenuItem value="Rattled">Rattled</MenuItem>
          <MenuItem value="Relieved">Relieved</MenuItem>
          <MenuItem value="Sad">Sad</MenuItem>
          <MenuItem value="Scared">Scared</MenuItem>
          <MenuItem value="Stressed">Stressed</MenuItem>
          <MenuItem value="Stuck">Stuck</MenuItem>
          <MenuItem value="Surprised">Surprised</MenuItem>
          <MenuItem value="Tired">Tired</MenuItem>
          <MenuItem value="Uneasy">Uneasy</MenuItem>
          <MenuItem value="Uncomfortable">Uncomfortable</MenuItem>
          <MenuItem value="Upset">Upset</MenuItem>
          <MenuItem value="Vulnerable">Vulnerable</MenuItem>
        </Select>
      </FormControl>
      {/* <input type="submit" value="Submit" />

        <input
          required={false}
          name="emotion1"
          value={formField.emotion1}
          onChange={onTag1Change}
          maxLength={22}
          placeholder="Tag one emotion. "
        /> */}
    </span>
  );
};

export default JournalTag2;
