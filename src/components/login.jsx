import React from "react";
import { useState } from "react";

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

const LoginPage = () => {
  const [checked, setChecked] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
 
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
      container
    >
      <Grid item sx={12}>
        <img src={logo} height={52} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Username"
          sx={{ backgroundColor: "white" }}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          sx={{ backgroundColor: "white" }}
          type={"password"}
        ></TextField>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="standard"
          sx={{ borderRadius: "18px !important", backgroundColor: "#6AB3F5" }}
        
        >
          <Typography>Login</Typography>{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
