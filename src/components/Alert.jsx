import React, { useEffect, useState } from "react";
import { Alert as AlertMsg, Snackbar } from "@mui/material";

const AlertSnack = React.forwardRef(function AlertSnack(props, ref) {
  return <AlertMsg elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert = ({ msg, type }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000}>
        <AlertSnack severity={type} sx={{ width: "100%" }}>
          {msg}
        </AlertSnack>
      </Snackbar>
    </>
  );
};

export default Alert;
