import React from "react";

const BackButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(2);
  };
  return (
    <div>
      <p>BackButton component</p>
      <button onClick={setPage}>Back</button>
    </div>
  );
};

export default BackButton;
