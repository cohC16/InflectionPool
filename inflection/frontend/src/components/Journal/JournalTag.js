import React, { Component } from "react";

const JournalTag = ({ name, value, onChange }) => {
  console.log(value);
  return (
    <span>
      <label>
        Tag an emotion:
        <select
          value={value}
          onChange={onChange}
          name="emotion1"
          required={false}
        >
          <option value=""></option>
          <option value="Angry">Angry</option>
          <option value="Ashamed">Ashamed</option>
          <option value="Betrayed">Betrayed</option>
          <option value="Bitter">Bitter</option>
          <option value="Brain Foggy">Brain Foggy</option>
          <option value="Confused">Confused</option>
          <option value="Content">Content</option>
          <option value="Curious">Curious</option>
          <option value="Disappointed">Disappointed</option>
          <option value="Disgusted">Disgusted</option>
          <option value="Dissociated">Dissociated</option>
          <option value="Embarrassed">Embarrassed</option>
          <option value="Excited">Excited</option>
          <option value="Focused">Focused</option>
          <option value="Frustrated">Frustrated</option>
          <option value="Grateful">Grateful</option>
          <option value="Guilty">Guilty</option>
          <option value="Happy">Happy</option>
          <option value="Hopeful">Hopeful</option>
          <option value="Hurt">Hurt</option>
          <option value="Hysterical">Hysterical</option>
          <option value="Incredulous">Incredulous</option>
          <option value="Jealous">Jealous</option>
          <option value="Lonely">Lonely</option>
          <option value="Moody">Moody</option>
          <option value="Nauseated">Nauseated</option>
          <option value="Numb">Numb</option>
          <option value="Overwhelmed">Overwhelmed</option>
          <option value="Panicked">Panicked</option>
          <option value="Proud">Proud</option>
          <option value="Rattled">Rattled</option>
          <option value="Relieved">Relieved</option>
          <option value="Sad">Sad</option>
          <option value="Scared">Scared</option>
          <option value="Stressed">Stressed</option>
          <option value="Stuck">Stuck</option>
          <option value="Surprised">Surprised</option>
          <option value="Tired">Tired</option>
          <option value="Uneasy">Uneasy</option>
          <option value="Uncomfortable">Uncomfortable</option>
          <option value="Upset">Upset</option>
          <option value="Vulnerable">Vulnerable</option>
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

export default JournalTag;
