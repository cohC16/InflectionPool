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
    setCurrentPage(2);
  };
  const setPage2 = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <p>Login Component</p>
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
        </li>
        <li>
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
        <li>
          <button onClick={setPage2}>Create User</button>
        </li>
      </ul>
    </div>
  );
};
export default Login;
