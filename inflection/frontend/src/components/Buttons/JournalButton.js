import React from "react";

const JournalButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(2);
  };
  return (
    <div>
      <p>JournalButton component</p>
      <button onClick={setPage}>Introspect</button>
    </div>
  );
};

export default JournalButton;
