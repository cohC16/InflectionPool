import React from "react";

const CreateUserButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>CreateUser Button component</p>
      <button onClick={setPage}>Create User</button>
    </div>
  );
};

export default CreateUserButton;
