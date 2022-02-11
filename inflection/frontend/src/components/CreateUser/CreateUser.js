import ExternalAuth from "./ExternalAuth";
import React, { useState } from "react";

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

  const onPasswordChange = (event) => {
    setFormField({
      ...formField,
      password: event.target.value,
    });
  };
  const id_setter = (data) => {
    set_id({ _id: data._id, nickname: data.nickname });
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
    console.log(
      formField.username,
      formField.password,
      formField.nickname,
      formField.email
    );
    setUsername(formField.username);
    setUserpass(formField.password);
    setNickname(formField.nickname);
    setEmail(formField.email);
    fetch("/api/users/create", requestOptions).then((response) =>
      response
        .json()
        .then((data) => id_setter({ _id: data._id, nickname: data.nickname }))
    );

    // .then(set_id(response["_id"]));
    setCurrentPage(2);
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
      <p>Create New User Account</p>
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
        <input type="submit" value="Create Profile" />
      </form>
    </div>
  );
};

export default CreateUser;
