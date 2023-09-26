import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "./EmorphedBox";

const Skills = () => {
  return (
    <EmorphedBox>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1">A list of my technical skills.</Typography>
    </EmorphedBox>
  );
};

export default Skills;
