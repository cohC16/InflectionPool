import React from "react";
import Button from "@mui/material/Button/";
const BackButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(0);
  };
  return (
    <span>
      <Button variant="contained" onClick={setPage}>
        Back
      </Button>
    </span>
  );
};

export default BackButton;
