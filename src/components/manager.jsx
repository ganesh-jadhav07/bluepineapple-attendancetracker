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

  const [duration, setDuration] = useState(0);

  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const style = {
    display: "flex",
    alignItems: "Center",
    justifyContent: "space-between",
  };

  return (
    <React.Fragment>
      <Container sx={{ borderRadius:"10px", p: "20px",backgroundColor:"#D4E2EF4D" }}>
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Manager</Typography>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Title
            </Typography>
            <Input placeholder="Enter the Title" onChange={(e)=>{setTitle(e.target.value)}} sx={{backgroundColor:"white"}} />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "43px" }}>
              Host
            </Typography>
            <Input placeholder="Enter the Host name" onChange={(e)=>{setHost(e.target.value)}} sx={{backgroundColor:"white"}} />
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ maxWidth: "195px",backgroundColor:"white" }} onChange={(e)=> setDate(`${e.$d}`)} value={date} />
            </LocalizationProvider>
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Start Time
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{ maxWidth: "195px" ,backgroundColor:"white"}}
                value={time}
                onChange={(e) => setTime(`${e.$d}`)}

              />
            </LocalizationProvider>
          </Box>
          <Box sx={style}>
            <Typography variant="subtitle1" sx={{ mr: "60px" }}>
              Duration
            </Typography>
            <Input placeholder="Enter duration of session" onChange={(e)=>{setDuration(e.target.value)}} sx={{backgroundColor:"white"}}/>
          </Box>

          {/* <Box sx={style}><Typography variant='subtitle1' sx={{mr:"20px"}}  >Geolocation</Typography><Box><TextField variant='outlined' sx={{display:"flex",flexDirection:"column"}} value={location.latitude} disabled></TextField><TextField value={location.longitude} disabled></TextField></Box></Box> */}
          <Box>
            <Button variant="contained">
              <Typography variant="subtitle2">Add session</Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Manager;
