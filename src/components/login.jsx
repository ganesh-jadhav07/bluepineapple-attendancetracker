import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import logo from "./../assets/bp-square-1.png";

// Import Alert
import Alert from "./Alert";

const LoginPage = () => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertContent, setAlertContent] = useState();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlertContent();
    }, 2000);
  });

  const loginDetailsHandler = async () => {
    const data = { email: email, password: password };
    try {
      const response = await fetch(
        "https://bw-attendance-api.onrender.com/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log(await response.json())
      await response.json().then((res) => {
        if (!res.token) {
          setAlertContent({
            msg: res.errors[0].msg,
            type: "error",
          });
          return;
        }
        localStorage.setItem("studentToken", res.token);
        // return <Alert msg="Login" type="success" />;
        navigate("/student", {
          state: {
            alertdata: {
              msg: "Login Succesfully",
              type: "success",
              alert: true,
            },
          },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  // console.log()
  return (
    <>
      {alertContent ? (
        <Alert msg={alertContent.msg} type={alertContent.type} />
      ) : (
        <></>
      )}
      <Grid
        sx={{
          backgroundColor: "#D4E2EF4D",
          borderRadius: "10px",
          display: "flex !important",
          flexDirection: "column !important",
          justifyContent: "Center",
          p: "32px",
        }}
        gap={4}
        container>
        <Grid item sx={12}>
          <img src={logo} height={52} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => setEmail(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            sx={{ backgroundColor: "white" }}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="standard"
            sx={{ borderRadius: "18px !important", backgroundColor: "#6AB3F5" }}
            onClick={loginDetailsHandler}>
            <Typography>Login</Typography>{" "}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
