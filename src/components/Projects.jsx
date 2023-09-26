import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "./EmorphedBox";

const Projects = () => {
  return (
    <EmorphedBox>
      <Typography variant="h6" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1">A collection of my latest work.</Typography>
    </EmorphedBox>
  );
};

export default Projects;
