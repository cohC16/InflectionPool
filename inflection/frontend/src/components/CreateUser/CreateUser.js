import ExternalAuth from "./ExternalAuth";
import React, { useState } from "react";
import BackToLoginButton from "../Buttons/BackToLoginButton";
import Button from "@mui/material/Button";

const CreateUser = ({
  setCurrentPage,
  setUsername,
  setUserpass,
  setNickname,
  setEmail,
  set_id,
}) => {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
    nickname: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onPasswordChange = (event) => {
    setFormField({
      ...formField,
      password: event.target.value,
    });
  };

  const id_setter = (data) => {
    if (data.created_at) {
      setUsername(data.username);
      setUserpass(data.password);
      setNickname(data.nickname);
      setEmail(data.email);
      set_id({ _id: data._id, nickname: data.nickname });
      setCurrentPage(2);
    } else {
      setErrorMessage("Username or Email already exists.");
    }
  };

  const onUsernameChange = (event) => {
    setFormField({
      ...formField,
      username: event.target.value,
    });
  };
  const onNicknameChange = (event) => {
    setFormField({
      ...formField,
      nickname: event.target.value,
    });
  };
  const onEmailChange = (event) => {
    setFormField({
      ...formField,
      email: event.target.value,
    });
  };
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmitted(true);
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: formField.username,
  //       password: formField.password,
  //     }),
  //   };
  //   setUsername(formField.username);
  //   fetch("/api/user", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => set_id({ _id: data._id, nickname: data.nickname }));
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formField.username,
        password: formField.password,
        nickname: formField.nickname,
        email: formField.email,
      }),
    };

    //   setUsername(formField.username);
    //   fetch("/api/user", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => set_id({ _id: data._id, nickname: data.nickname }));
    // };

    fetch("/api/users/create", requestOptions).then((response) =>
      response.json().then((data) => id_setter(data))
    );

    // .then(set_id(response["_id"]));
  };
  const setPage = () => {
    console.log(formField.username);
    setUsername(formField.username);
    setUserpass(formField.password);
    setNickname(formField.nickname);
    setEmail(formField.email);
    setCurrentPage(2);
  };
  return (
    <div>
      <p>
        Create New User Account   
        <BackToLoginButton setCurrentPage={setCurrentPage} />
      </p>

      <form className="" onSubmit={onFormSubmit}>
        <p>
          <label>Username </label>
          <input
            name="Username"
            required={true}
            value={formField.username}
            onChange={onUsernameChange}
            maxLength={20}
            // helperText="Username go brrr"
          />
        </p>
        <p>
          <label>Password </label>
          <input
            type="password"
            required={true}
            name="Password"
            value={formField.password}
            onChange={onPasswordChange}
            maxLength={22}
            // helperText="Password go psssspsps"
          />
        </p>
        <p>
          <label>Nickname </label>
          <input
            name="Nickname"
            required={true}
            value={formField.nickname}
            onChange={onNicknameChange}
            maxLength={20}
            // helperText="Yeah, we're there."
          />
        </p>
        <p>
          <label>Email </label>
          <input
            name="Email"
            value={formField.email}
            onChange={onEmailChange}
            required={true}
            maxLength={250}
            // helperText="Real email for real human."
          />
        </p>
        <Button variant="contained" type="submit">
          Create Profile
        </Button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};

export default CreateUser;
