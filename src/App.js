import "./App.css";
import { Fragment } from "react";
import LoginPage from "./components/login";
import Navbar from "./components/navbar";
import { Box } from "@mui/material";
import Student from "./components/student";
import { Route, Routes } from "react-router-dom";
import Manager from "./components/manager";
import AdminLoginPage from "./components/admin/login";
import AccessDenied from "./pages/AccessDenied";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}>
        <Box>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/admin" element={<AdminLoginPage />}>
              {" "}
            </Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="manager" element={<Manager />}></Route>
            <Route path="/access" element={<AccessDenied />}></Route>
          </Routes>
        </Box>
      </div>
    </Fragment>
  );
}

export default App;
