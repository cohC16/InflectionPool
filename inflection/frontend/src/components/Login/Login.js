import ExternalAuth from "./ExternalAuth";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <Box paddingTop="1rem" style={{ minHeight: "3.5rem" }}>
        <Grid
          item
          bgcolor="#ffebee"
          borderRadius={2}
          paddingTop="1rem"
          display="flex"
          item
          xs={12}
        >
          <Box style={{ minHeight: "2.5rem" }} fontFamily="Montserrat">
               Log In
          </Box>
        </Grid>
      </Box>
      <Box fontFamily="Montserrat">
        <form className="" onSubmit={onFormSubmit}>
          <Grid container paddingTop=".4rem">
            <Grid item xs={0.4} />
            <Grid item xs={11.6}>
              <p>
                <label>Username - </label>
                <input
                  style={{
                    fontFamily: "Montserrat",
                  }}
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
            </Grid>
          </Grid>
        </form>
      </Box>
      <Grid container paddingTop="1.1rem">
        <Grid item xs={0.4} />
        <Grid item xs={11.6}>
          <Button variant="contained" onClick={setPage2}>
            Create User
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
