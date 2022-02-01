import ExternalAuth from "./ExternalAuth";
import React, { useState } from "react";

const Login = ({ setCurrentPage, setUsername, setUserpass }) => {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
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

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.setUsername(formField.username);
    props.setUserpass(formField.password);
  };
  const setPage = () => {
    console.log(formField.username);
    setUsername(formField.username);
    setUserpass(formField.password);
    setCurrentPage(1);
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
        </li>
        <li>
          <button onClick={setPage}>Login</button>
        </li>
      </ul>
    </div>
  );
};
export default Login;
