import React from "react";
import Button from "@mui/material/Button/";
const InteractionButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(4);
  };
  return (
    <div>
      <Button variant="contained" onClick={setPage}>
        Reflect
      </Button>
    </div>
  );
};

export default InteractionButton;
