import ExternalAuth from "./ExternalAuth";
import React, { useState } from "react";

const Login = ({ setCurrentPage, setUsername, setUserpass }) => {
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

    props.setUsername(formField.username);
    props.setUserpass(formField.password);
    props.setNickname(formField.nickname);
    props.setEmail(formField.email);
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
      <p>Login component</p>
      <ul>
        <li>
          <ExternalAuth />
        </li>
        <li>
          <input
            name="Username"
            value={formField.username}
            onChange={onUsernameChange}
          />
          <input
            type="password"
            name="Password"
            value={formField.password}
            onChange={onPasswordChange}
          />
          <input
            name="Nickname"
            value={formField.nickname}
            onChange={onNicknameChange}
          />
          <input
            name="Email"
            value={formField.username}
            onChange={onEmailChange}
          />
        </li>
        <li>
          <button onClick={setPage}>Login</button>
        </li>
      </ul>
    </div>
  );
};
export default Login;
