import React from "react";
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { EmorphedBox } from "components/core/EmorphedBox";
import { MaskedButton } from "components/core/MaskedButton";
import Interests from "./Interests";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <EmorphedBox
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isMobile ? theme.spacing(1) : theme.spacing(2),
      }}
    >
      <Grid
        container
        direction="column"
        spacing={isMobile ? 1 : 2}
        sx={{
          height: "100%",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="body1"
            paragraph
            sx={{
              marginBottom: 2,
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}
          >
            I'm a self-driven, collaborative, and learning-focused undergraduate
            software engineering student looking for a challenging internship
            position where I can use my problem-solving abilities, creative
            thinking, and programming knowledge to help develop cutting-edge
            software solutions while expanding my knowledge in the field of
            software engineering.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Interests />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: isMobile ? "center" : "right" }}>
          <MaskedButton
            variant="contained"
            startIcon={<GetAppIcon />}
            sx={{
              marginTop: 2,
              textTransform: "none",
              padding: isMobile ? "8px 16px" : "10px 20px",
              fontSize: "0.9rem",
            }}
          >
            Download CV
          </MaskedButton>
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default About;
