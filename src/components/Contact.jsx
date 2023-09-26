import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "./EmorphedBox";

const Contact = () => {
  return (
    <EmorphedBox
      sx={{
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">Drop me a line.</Typography>
    </EmorphedBox>
  );
};

export default Contact;
