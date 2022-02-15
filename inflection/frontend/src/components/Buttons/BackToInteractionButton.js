import React from "react";
import Button from "@mui/material/Button/";
const BackToInteractionButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(4);
  };
  return (
    <span>
      <Button variant="contained" onClick={setPage}>
        Back
      </Button>
    </span>
  );
};

export default BackToInteractionButton;
