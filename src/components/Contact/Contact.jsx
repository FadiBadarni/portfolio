import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";

const Contact = () => {
  return (
    <EmorphedBox>
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">Drop me a line.</Typography>
    </EmorphedBox>
  );
};

export default Contact;
