import React, { Component } from "react";

const JournalTagValue = ({ name, value, onChange }) => {
  console.log(value);
  return (
    <span>
      <label>
        Intensity:
        <select
          value={value}
          onChange={onChange}
          name="emotionvalue1"
          required={false}
        >
          <option value=""></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </label>
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

export default JournalTagValue;
