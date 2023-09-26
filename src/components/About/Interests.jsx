import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { StyledChip } from "components/core/StyledChip";

const interests = [
  "Web Development",
  "Mobile App Development",
  "DevOps",
  "Full Stack Development",
];

const Interests = () => {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <Typography variant="subtitle2">Interests:</Typography>
      </Grid>
      <Grid item xs>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {interests.map((interest, index) => (
            <StyledChip label={interest} key={index} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Interests;
