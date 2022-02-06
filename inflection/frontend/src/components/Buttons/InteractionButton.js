import React from "react";

const InteractionButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(4);
  };
  return (
    <div>
      <p>InteractionButton component</p>
      <button onClick={setPage}>Reflect</button>
    </div>
  );
};

export default InteractionButton;
