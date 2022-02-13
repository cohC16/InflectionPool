import React from "react";

const BackToLoginButton = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(0);
  };
  return (
    <span>
      <button onClick={setPage}>Back</button>
    </span>
  );
};

export default BackToLoginButton;
