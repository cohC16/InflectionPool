import React from "react";

const BackButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(2);
  };
  return (
    <div>
      <button onClick={setPage}>Back</button>
    </div>
  );
};

export default BackButton;
