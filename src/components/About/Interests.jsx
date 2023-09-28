import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { StyledChip } from "components/core/StyledChip";

const interests = [
  "Web Development",
  "Mobile App Development",
  "DevOps",
  "Full Stack Development",
];

const Interests = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      spacing={isMobile ? 1 : 2}
    >
      <Grid item xs={isMobile ? 12 : undefined}>
        <Typography variant="subtitle1">Interests</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {interests.map((interest, index) => (
            <StyledChip
              label={interest}
              key={index}
              sx={{
                fontSize: isMobile ? "0.7rem" : "0.8rem",
                padding: isMobile ? "4px 8px" : "6px 12px",
              }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Interests;
