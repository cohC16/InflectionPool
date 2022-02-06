import React from "react";

const JournalButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(3);
  };
  return (
    <div>
      <p>JournalButton component</p>
      <button onClick={setPage}>Introspect</button>
    </div>
  );
};

export default JournalButton;
