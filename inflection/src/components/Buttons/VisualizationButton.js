import React from "react";
import Button from "@mui/material/Button/";

const VisualizationButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(5);
  };
  return (
    <div>
      <Button variant="contained" onClick={setPage}>
        Circumspect
      </Button>
    </div>
  );
};

export default VisualizationButton;
