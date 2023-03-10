import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const AccessDenied = () => {
  return (
    <Card>
      <CardContent>
        <Typography>
          You're not authorized to access this Page. Please contact the
          administrator
        </Typography>
        <Link to="/">Home</Link>
      </CardContent>
    </Card>
  );
};

export default AccessDenied;
