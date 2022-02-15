import React, { Component } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const JournalTag = ({ name, value, onChange }) => {
  return (
    <span>
      <FormControl key={name} sx={{ m: 0.6, minWidth: 200 }} size="small">
        <InputLabel>Emotion</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          name="emotion1"
          required={false}
        >
          <MenuItem key="" value=""></MenuItem>
          <MenuItem key="Angry" value="Angry">
            Angry
          </MenuItem>
          <MenuItem key="Ashamed" value="Ashamed">
            Ashamed
          </MenuItem>
          <MenuItem key="Betrayed" value="Betrayed">
            Betrayed
          </MenuItem>
          <MenuItem key="Bitter" value="Bitter">
            Bitter
          </MenuItem>
          <MenuItem key="Brain_Foggy" value="Brain_Foggy">
            Brain Foggy
          </MenuItem>
          <MenuItem key="Confused" value="Confused">
            Confused
          </MenuItem>
          <MenuItem key="Content" value="Content">
            Content
          </MenuItem>
          <MenuItem key="Curious" value="Curious">
            Curious
          </MenuItem>
          <MenuItem key="Disappointed" value="Disappointed">
            Disappointed
          </MenuItem>
          <MenuItem key="Disgusted" value="Disgusted">
            Disgusted
          </MenuItem>
          <MenuItem key="Dissociated" value="Dissociated">
            Dissociated
          </MenuItem>
          <MenuItem key="Embarrassed" value="Embarrassed">
            Embarrassed
          </MenuItem>
          <MenuItem key="Excited" value="Excited">
            Excited
          </MenuItem>
          <MenuItem key="Focused" value="Focused">
            Focused
          </MenuItem>
          <MenuItem key="Frustrated" value="Frustrated">
            Frustrated
          </MenuItem>
          <MenuItem key="Grateful" value="Grateful">
            Grateful
          </MenuItem>
          <MenuItem key="Guilty" value="Guilty">
            Guilty
          </MenuItem>
          <MenuItem key="Happy" value="Happy">
            Happy
          </MenuItem>
          <MenuItem key="Hopeful" value="Hopeful">
            Hopeful
          </MenuItem>
          <MenuItem key="Hurt" value="Hurt">
            Hurt
          </MenuItem>
          <MenuItem key="Hysterical" value="Hysterical">
            Hysterical
          </MenuItem>
          <MenuItem key="Incredulous" value="Incredulous">
            Incredulous
          </MenuItem>
          <MenuItem key="Jealous" value="Jealous">
            Jealous
          </MenuItem>
          <MenuItem key="Lonely" value="Lonely">
            Lonely
          </MenuItem>
          <MenuItem key="Moody" value="Moody">
            Moody
          </MenuItem>
          <MenuItem key="Nauseated" value="Nauseated">
            Nauseated
          </MenuItem>
          <MenuItem key="Numb" value="Numb">
            Numb
          </MenuItem>
          <MenuItem key="Overwhelmed" value="Overwhelmed">
            Overwhelmed
          </MenuItem>
          <MenuItem key="Panicked" value="Panicked">
            Panicked
          </MenuItem>
          <MenuItem key="Proud" value="Proud">
            Proud
          </MenuItem>
          <MenuItem key="Rattled" value="Rattled">
            Rattled
          </MenuItem>
          <MenuItem key="Relieved" value="Relieved">
            Relieved
          </MenuItem>
          <MenuItem key="Sad" value="Sad">
            Sad
          </MenuItem>
          <MenuItem key="Scared" value="Scared">
            Scared
          </MenuItem>
          <MenuItem key="Stressed" value="Stressed">
            Stressed
          </MenuItem>
          <MenuItem key="Stuck" value="Stuck">
            Stuck
          </MenuItem>
          <MenuItem key="Surprised" value="Surprised">
            Surprised
          </MenuItem>
          <MenuItem key="Tired" value="Tired">
            Tired
          </MenuItem>
          <MenuItem key="Uneasy" value="Uneasy">
            Uneasy
          </MenuItem>
          <MenuItem key="Uncomfortable" value="Uncomfortable">
            Uncomfortable
          </MenuItem>
          <MenuItem key="Upset" value="Upset">
            Upset
          </MenuItem>
          <MenuItem key="Vulnerable" value="Vulnerable">
            Vulnerable
          </MenuItem>
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

export default JournalTag;
