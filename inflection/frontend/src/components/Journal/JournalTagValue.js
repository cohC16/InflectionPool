import React, { Component } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const JournalTagValue = ({ name, value, onChange }) => {
  return (
    <span>
      <FormControl key={name} sx={{ m: 0.6, minWidth: 120 }} size="small">
        <InputLabel>Intensity</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          name="emotionvalue1"
          required={false}
        >
          <MenuItem key="0" value={0}></MenuItem>
          <MenuItem key="1" value={1}>
            1
          </MenuItem>
          <MenuItem key="2" value={2}>
            2
          </MenuItem>
          <MenuItem key="3" value={3}>
            3
          </MenuItem>
          <MenuItem key="4" value={4}>
            4
          </MenuItem>
          <MenuItem key="5" value={5}>
            5
          </MenuItem>
          <MenuItem key="6" value={6}>
            6
          </MenuItem>
          <MenuItem key="7" value={7}>
            7
          </MenuItem>
          <MenuItem key="8" value={8}>
            8
          </MenuItem>
          <MenuItem key="9" value={9}>
            9
          </MenuItem>
          <MenuItem key="10" value={10}>
            10
          </MenuItem>
        </Select>
      </FormControl>
    </span>
  );
};

export default JournalTagValue;
