import React from "react";
import Button from "@mui/material/Button/";
const DeleteEntryButton = ({ onClickCallback, text }) => {
  const setPage = (newPage) => {
    setCurrentPage(2);
  };
  return (
    <span>
      <Button variant="contained" onClick={onClickCallback}>
        {text}
      </Button>
    </span>
  );
};

export default DeleteEntryButton;
