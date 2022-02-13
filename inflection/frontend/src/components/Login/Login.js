import ExternalAuth from "./ExternalAuth";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Login = ({
  setCurrentPage,
  setUsername,
  setUserpass,
  set_id,
  _id,
  setNickname,
}) => {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
  });

  const [hasSubmitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const effectCleanup = () => {
    if (hasSubmitted) {
      if (_id) {
        setCurrentPage(2);
      } else {
        setErrorMessage("Invalid Login Credentials");
      }
    }
  };

  useEffect(() => {
    effectCleanup();
    let mounted = true;
    return function cleanup() {
      mounted = false;
      console.log("unmounted login");
    };
  }, [_id]);

  const onPasswordChange = (event) => {
    setFormField({
      ...formField,
      password: event.target.value,
    });
  };
  const onUsernameChange = (event) => {
    setFormField({
      ...formField,
      username: event.target.value,
    });
  };
  const onuser = (event) => {
    setFormField({
      ...formField,
      username: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formField.username,
        password: formField.password,
      }),
    };
    setUsername(formField.username);
    fetch("/api/user", requestOptions)
      .then((response) => response.json())
      .then((data) => set_id({ _id: data._id, nickname: data.nickname }));
  };

  const setPage = () => {
    console.log(formField.username);
    setUsername(formField.username);
    setUserpass(formField.password);
    setCurrentPage(2);
  };
  const setPage2 = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <h3>Login, friend.</h3>
      <form className="" onSubmit={onFormSubmit}>
        <p>
          <label>Username - </label>
          <input
            name="Username"
            required={true}
            maxLength={20}
            value={formField.username}
            onChange={onUsernameChange}
            placeholder="Username"
          />{" "}
        </p>
        <p>
          <label>Password - </label>
          <input
            type="password"
            name="Password"
            value={formField.password}
            onChange={onPasswordChange}
            required={true}
            maxLength={22}
            placeholder="Password"
          />
        </p>
        <p>{errorMessage}</p>
        <Button variant="contained" type="submit" value="Login">
          Login
        </Button>
      </form>
      <p>
        <Button variant="contained" onClick={setPage2}>
          Create User
        </Button>
      </p>
    </div>

    // <div>
    //   <p>Login Component</p>
    //   <ul>
    //     <li>
    //       <ExternalAuth />
    //     </li>
    //     <li>
    // <input
    //   name="Username"
    //   value={formField.username}
    //   onChange={onUsernameChange}
    // />
    //     </li>
    //     <li>
    //       <input
    //         type="password"
    //         name="Password"
    //         value={formField.password}
    //         onChange={onPasswordChange}
    //       />
    //     </li>
    //     <li>
    //       <button onClick={setPage}>Login</button>
    //     </li>
    //     <li>
    //       <button onClick={setPage2}>Create User</button>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Login;
