import React from "react";
import { useState } from "react";
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
// import logo from "./../assets/bp-square-1.png";

const AdminLoginPage = () => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const loginDetailsHandler = async () => {
    const data = { email: email, password: password };
    try {
      const response = await fetch(
        "https://bw-attendance-api.onrender.com/admin/login",
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
          return;
        }
        localStorage.setItem("adminToken", res.token);
        navigate("/manager");
      });
    } catch (e) {
      console.log(e);
    }
  };

  // console.log()
  return (
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
        <img src={""} alt={""} height={52} />
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
  );
};

export default AdminLoginPage;
