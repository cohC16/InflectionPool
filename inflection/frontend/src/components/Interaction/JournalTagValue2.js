import React, { Component } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const JournalTagValue2 = ({ name, value, onChange }) => {
  return (
    <span>
      <FormControl sx={{ m: 0.6, minWidth: 120 }} size="small">
        <InputLabel>Intensity</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          name="emotionvalue1"
          required={false}
        >
          <MenuItem value={0}></MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        {/* <input type="submit" value="Submit" />

        <input
          required={false}
          name="emotion1"
          value={formField.emotion1}
          onChange={onTag1Change}
          maxLength={22}
          placeholder="Tag one emotion. "
        /> */}
      </FormControl>
    </span>
  );
};

export default JournalTagValue2;
