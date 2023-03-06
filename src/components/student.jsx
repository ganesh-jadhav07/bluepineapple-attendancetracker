import { Container, Input, Typography, Button, TextField } from "@mui/material";
import { Stack, Box, width } from "@mui/system";
import { useState, useEffect } from "react";
import React from "react";
import { Fragment } from "react";

const Student = () => {
  const [sessionId, setSessionId] = useState("");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => console.log(error)
    );
  }, []);
  const style = {
    display: "flex",
    alignItems: "Center",
    justifyContent: "space-between",
  };

  const fetchSessionDetailsHandler = async () => {
    const data = { code: sessionId };
    const response = fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json()
  };



  return (
    <Fragment>
  
      <Container sx={{ border: "2px solid", p: "20px",zIndex:"1" }}>
     
        <Stack direction={"column"} alignItems="center">
          <TextField
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            placeholder="Session Code"
            fullWidth
          />
          <Button
            variant="contained"
            sx={{ width: "10em", margin: "0.5em" }}
            onClick={fetchSessionDetailsHandler}
          >
            Submit
          </Button>
        </Stack>
      </Container>
      <Container sx={{ border: "2px solid", p: "20px" }}>
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Session</Typography>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Title
            </Typography>
            <Input value={"HTML & CSS"} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "43px" }}>
              Host
            </Typography>
            <Input value={"Avinash Thatte"} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Start Time
            </Typography>
            <Input value={new Date("2022-12-09")} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Duration
            </Typography>
            <Input value={"2 Hr(s)"} disabled />
          </Box>

          {/* <Box sx={style}><Typography variant='subtitle1' sx={{mr:"20px"}}  >Geolocation</Typography><Box><TextField variant='outlined' sx={{display:"flex",flexDirection:"column"}} value={location.latitude} disabled></TextField><TextField value={location.longitude} disabled></TextField></Box></Box> */}
          <Box>
            <Button variant="contained">
              <Typography variant="subtitle2">Mark Your Attendance</Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Student;
