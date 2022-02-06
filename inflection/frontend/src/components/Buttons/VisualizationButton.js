import React from "react";

const VisualizationButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(5);
  };
  return (
    <div>
      <p>VisualizationButton component</p>
      <button onClick={setPage}>Circumspect</button>
    </div>
  );
};

export default VisualizationButton;
