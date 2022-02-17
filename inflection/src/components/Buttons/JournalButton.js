import React from "react";
import Button from "@mui/material/Button/";
const JournalButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(3);
  };
  return (
    <div>
      <Button variant="contained" onClick={setPage}>
        Introspect
      </Button>
    </div>
  );
};

export default JournalButton;
