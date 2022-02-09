import React, { Component, useState } from "react";
import { render } from "react-dom";
import Home from "./Home/Home";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import Interaction from "./Interaction/Interaction";
import Visualization from "./Visualization/Visualization";
import CreateUser from "./CreateUser/CreateUser";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [username, setUsername] = useState("");
  const [_id, set_id] = useState("");
  const [userpass, setUserpass] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const pageComponents = [
    <div>
      <Login
        setCurrentPage={setCurrentPage}
        setUsername={setUsername}
        setUserpass={setUserpass}
        set_id={set_id}
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
        nickname={nickname}
        email={email}
        _id={_id}
      />
    </div>,
    <div>
      <Journal
        setCurrentPage={setCurrentPage}
        username={username}
        userpass={userpass}
        nickname={nickname}
        email={email}
        _id={_id}
      />
    </div>,
    <div>
      <Interaction setCurrentPage={setCurrentPage} />
    </div>,
    <div>
      <Visualization setCurrentPage={setCurrentPage} />
    </div>,
  ];
  return pageComponents[currentPage];
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

const appDiv = document.getElementById("app");
render(<App />, appDiv);
