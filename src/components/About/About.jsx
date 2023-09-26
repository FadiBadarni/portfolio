import React from "react";
import { Typography, Grid } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { EmorphedBox } from "components/core/EmorphedBox";
import { MaskedButton } from "components/core/MaskedButton";
import Interests from "./Interests";

const About = () => {
  return (
    <EmorphedBox
      sx={{
        background: "#F9F9F9",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
            I'm a self-driven, collaborative, and learning-focused undergraduate
            software engineering student looking for a challenging internship
            position where I can use my problem-solving abilities, creative
            thinking, and programming knowledge to help develop cutting-edge
            software solutions while expanding my knowledge in the field of
            software engineering.
          </Typography>
        </Grid>
        <Grid item>
          <Interests />
        </Grid>
        <Grid item style={{ textAlign: "right" }}>
          <MaskedButton
            variant="contained"
            startIcon={<GetAppIcon />}
            sx={{
              marginTop: 2,
              textTransform: "none",
              padding: "10px 20px",
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
