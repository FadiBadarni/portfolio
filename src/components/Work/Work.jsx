import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";

const Work = () => {
  return (
    <EmorphedBox>
      <Typography variant="h6" gutterBottom>
        Work
      </Typography>
      <Typography variant="body1">A collection of my latest work.</Typography>
    </EmorphedBox>
  );
};

export default Work;
