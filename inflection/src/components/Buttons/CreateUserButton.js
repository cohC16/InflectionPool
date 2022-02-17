import React from "react";
import Button from "@mui/material/Button/";

const CreateUserButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>CreateUser Button component</p>
      <Button onClick={setPage}>Create User</Button>
    </div>
  );
};

export default CreateUserButton;
