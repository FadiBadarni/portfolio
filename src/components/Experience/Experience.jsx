import React from "react";
import {
  Typography,
  Box,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";
import { experienceData } from "./experienceData";
import { StyledChip } from "components/core/StyledChip";

const Experience = ({ selectedSkill }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const skillExperience = experienceData[selectedSkill] || {};

  return (
    <EmorphedBox
      sx={{
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant={isSmallScreen ? "body2" : "h6"}
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {selectedSkill
              ? `Knowledge about ${selectedSkill}`
              : "Select a Skill to Display Knowledge"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.1)",
            }}
          >
            {Object.keys(skillExperience).includes("Overview") && (
              <Typography
                variant={isSmallScreen ? "body2" : "body1"}
                gutterBottom
              >
                {skillExperience["Overview"]}
              </Typography>
            )}
          </Box>
        </Grid>

        {Object.keys(skillExperience).includes("Sub-skills") && (
          <Grid item xs={12}>
            <Typography
              variant={isSmallScreen ? "body2" : "h6"}
              gutterBottom
              sx={{ textAlign: "center", mb: 2 }}
            >
              Sub-Skills
            </Typography>
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={1}
              gap={1}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              {skillExperience["Sub-skills"].map((skill, index) => (
                <StyledChip
                  label={skill}
                  key={index}
                  sx={{
                    width: isSmallScreen
                      ? "100%"
                      : isMediumScreen
                      ? "50%"
                      : "auto",
                  }}
                />
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </EmorphedBox>
  );
};

export default Experience;
