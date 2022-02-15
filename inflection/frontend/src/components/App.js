import React, { Component, useState } from "react";
import { render } from "react-dom";
import Home from "./Home/Home";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import Interaction from "./Interaction/Interaction";
import Visualization from "./Visualization/Visualization";
import CreateUser from "./CreateUser/CreateUser";
import Theme from "./Theme";
import JournalUpdate from "./Interaction/JournalUpdate";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [username, setUsername] = useState("");
  const [_id, set_id] = useState({ _id: "", nickname: "" });
  const [userpass, setUserpass] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [journalReview, UpdatedJournalReview] = useState({});

  const pageComponents = [
    <div>
      <Login
        setCurrentPage={setCurrentPage}
        setUsername={setUsername}
        setUserpass={setUserpass}
        set_id={set_id}
        setNickname={setNickname}
        _id={_id}
      />
    </div>,
    <div>
      <CreateUser
        setCurrentPage={setCurrentPage}
        setUsername={setUsername}
        setNickname={setNickname}
        setEmail={setEmail}
        setUserpass={setUserpass}
        set_id={set_id}
      />
    </div>,
    <div>
      <Home
        setCurrentPage={setCurrentPage}
        username={username}
        userpass={userpass}
        nickname={_id.nickname}
        email={email}
        _id={_id._id}
      />
    </div>,
    <div>
      <Journal
        setCurrentPage={setCurrentPage}
        username={username}
        nickname={nickname}
        email={email}
        _id={_id}
      />
    </div>,
    <div>
      <Interaction
        setCurrentPage={setCurrentPage}
        username={username}
        nickname={nickname}
        email={email}
        _id={_id}
        UpdatedJournalReview={UpdatedJournalReview}
      />
    </div>,
    <div>
      <Visualization
        setCurrentPage={setCurrentPage}
        username={username}
        _id={_id}
      />
    </div>,
    <div>
      <JournalUpdate
        setCurrentPage={setCurrentPage}
        username={username}
        nickname={nickname}
        email={email}
        _id={_id}
        UpdatedJournalReview={UpdatedJournalReview}
        reviewData={journalReview}
      />
    </div>,
  ];
  return (
    <ThemeProvider theme={Theme}>{pageComponents[currentPage]}</ThemeProvider>
  );
  // <div>
  //   <h1>App.js component</h1>
  //   <Login />
  //   <Home />
  //   <Journal />
  //   <Interaction />
  //   <Visualization />
  // </div>
};

export default App;

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);
