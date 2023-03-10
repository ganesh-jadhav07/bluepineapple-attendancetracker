import { Container, Input, Typography, Button, TextField } from "@mui/material";
import { Stack, Box } from "@mui/system";
import { useState, useEffect } from "react";
import React from "react";
import { Fragment } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const Manager = () => {
  const [title, setTitle] = useState("");
  const [host, setHost] = useState("");
  const [date, setDate] = useState();
  const [startTime, setstartTime] = useState();
  const [endTime, setendTime] = useState();
  // const [duration, setDuration] = useState(null);

  const addSessionHandler = async () => {
    const data = {
      title: title,
      host: host,
      description: "",
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
    try {
      const session = await fetch(
        "https://bw-attendance-api.onrender.com/session/addsession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("adminToken"),
          },
          body: JSON.stringify(data),
        }
      );

      let res = await session.json();
      //  console.log(res)

      if (!res.errors) {
        setTitle("");
        setHost("");
        setDate();
        setstartTime();
        setendTime();
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const style = {
    display: "flex",
    alignItems: "Center",
    justifyContent: "space-between",
  };

  return (
    <React.Fragment>
      <Container
        sx={{ borderRadius: "10px", p: "20px", backgroundColor: "#D4E2EF4D" }}>
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Manager</Typography>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Title
            </Typography>
            <Input
              placeholder="Enter the Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              sx={{ backgroundColor: "white" }}
            />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "43px" }}>
              Host
            </Typography>
            <Input
              placeholder="Enter the Host name"
              value={host}
              onChange={(e) => {
                setHost(e.target.value);
              }}
              sx={{ backgroundColor: "white" }}
            />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ maxWidth: "195px", backgroundColor: "white" }}
                onChange={(e) => setDate(`${e.$d}`)}
                value={date}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Start Time
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{ maxWidth: "195px", backgroundColor: "white" }}
                value={startTime}
                onChange={(e) => setstartTime(`${e.$d}`)}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              End Time
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{ maxWidth: "195px", backgroundColor: "white" }}
                value={endTime}
                onChange={(e) => setendTime(`${e.$d}`)}
              />
            </LocalizationProvider>
          </Box>
          {/* <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "43px" }}>
              Duration
            </Typography>
            <Input placeholder="Enter the Host name" value={startTime && endTime ?endTime-startTime : "0"}sx={{backgroundColor:"white"}} />
          </Box> */}

          {/* <Box sx={style}><Typography variant='subtitle1' sx={{mr:"20px"}}  >Geolocation</Typography><Box><TextField variant='outlined' sx={{display:"flex",flexDirection:"column"}} value={location.latitude} disabled></TextField><TextField value={location.longitude} disabled></TextField></Box></Box> */}
          <Box>
            <Button variant="contained" onClick={addSessionHandler}>
              <Typography variant="subtitle2">Add session</Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Manager;
