import { Container, Input, Typography, Button, TextField } from "@mui/material";
import { Stack, Box, width } from "@mui/system";
import { useState, useEffect } from "react";
import React from "react";
import { Fragment } from "react";

const Student = () => {
  const [sessionId, setSessionId] = useState("");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [sessionDetails, setSessionDetails] = useState({});

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
    
    try {
      const session = await fetch(
        `http://localhost:5000/session/getsessionbycode/${data.code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let d = await session.json();
      setSessionDetails(d);
      console.log(d)
      // console.log(await session.json())

    } catch (e) {
      console.log(e);
    }
  };

  const attendanceMarkHandler = async () => {
    try {
      let token = localStorage.getItem('studentToken')
      const attend = await fetch(`http://localhost:5000/attendance/addattendance/${sessionDetails.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        }
      })
    }
    catch(e) {
      console.log(e)  
    }
  }

  return (
    <Fragment>
      <Container
        sx={{
          borderRadius: "10px",
          p: "20px",
          zIndex: "1",
          backgroundColor: "#D4E2EF4D",
        }}
      >
        <Stack direction={"column"} alignItems="center">
          <TextField
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            placeholder="Session Code"
            fullWidth
            sx={{ backgroundColor: "white" }}
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
      <Container
        sx={{
          borderRadius: "10px",
          mt: "20px",
          p: "20px",
          backgroundColor: "#D4E2EF4D",
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Session</Typography>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Title
            </Typography>
            <Input value={sessionDetails.Title} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "43px" }}>
              Host
            </Typography>
            <Input value={sessionDetails.Host} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Start Time
            </Typography>
            <Input value={sessionDetails.StartTime} disabled />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Duration
            </Typography>
            <Input value={sessionDetails.EndTime - sessionDetails.StartTime} disabled />
          </Box>

          {/* <Box sx={style}><Typography variant='subtitle1' sx={{mr:"20px"}}  >Geolocation</Typography><Box><TextField variant='outlined' sx={{display:"flex",flexDirection:"column"}} value={location.latitude} disabled></TextField><TextField value={location.longitude} disabled></TextField></Box></Box> */}
          <Box>
            <Button variant="contained" onClick={attendanceMarkHandler}>
              <Typography variant="subtitle2" >Mark Your Attendance</Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Student;
