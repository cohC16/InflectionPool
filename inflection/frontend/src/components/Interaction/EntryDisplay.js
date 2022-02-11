import React, { Component, useEffect } from "react";

const EntryDisplay = ({
  setDisplayEntries,
  displayEntries,
  setCurrentPage,
  username,
  _id,
}) => {
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmitted(true);
  //   setUsername(formField.username);
  // };
  {
    {
      return (
        <div>
          <p>All your entries</p>;<p>{displayEntries}</p>;
        </div>
      );
    }
  }
};
export default EntryDisplay;
