import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { MaskedButton } from "components/core/MaskedButton";
import DetailsModal from "./DetailsModal";

const Experience = ({ selectedSkill }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false); // State to control the modal
  const skillExperience = experienceData[selectedSkill] || {};

  const MAX_SUBSKILLS = 6;
  const MAX_SUBSKILLS_MOBILE = 2;

  const shouldShowMoreInfoButton = skillExperience["Sub-skills"]
    ? isSmallScreen
      ? skillExperience["Sub-skills"].length > MAX_SUBSKILLS_MOBILE
      : skillExperience["Sub-skills"].length > MAX_SUBSKILLS
    : false;

  const handleOpen = () => setOpen(true); // Function to open the modal

  const handleClose = () => setOpen(false); // Function to close the modal

  return (
    <EmorphedBox
      sx={{
        height: "520px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            <Typography
              variant={isSmallScreen ? "body2" : "h6"}
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {selectedSkill
                ? `Knowledge about ${selectedSkill}`
                : "Select a Skill to Display Knowledge"}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.1)",
                height: "220px",
                overflow: "auto",
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
          </motion.div>
        </Grid>

        {Object.keys(skillExperience).includes("Sub-skills") && (
          <>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
              >
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
                  sx={{
                    height: shouldShowMoreInfoButton ? "80px" : "auto",
                    overflow: shouldShowMoreInfoButton ? "hidden" : "visible",
                  }}
                >
                  {skillExperience["Sub-skills"] &&
                    skillExperience["Sub-skills"]
                      .slice(
                        0,
                        isSmallScreen ? MAX_SUBSKILLS_MOBILE : MAX_SUBSKILLS
                      )
                      .map((skill, index) => (
                        <StyledChip
                          label={skill}
                          key={index}
                          style={{
                            width: isSmallScreen
                              ? "100%"
                              : isMediumScreen
                              ? "50%"
                              : "auto",
                          }}
                        />
                      ))}
                </Stack>
                {shouldShowMoreInfoButton && (
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      mt: 2,
                    }}
                  >
                    <MaskedButton onClick={handleOpen}>
                      More Information
                    </MaskedButton>
                  </Grid>
                )}
              </motion.div>
            </Grid>
          </>
        )}
      </Grid>
      <DetailsModal
        open={open}
        handleClose={handleClose}
        subSkills={skillExperience["Sub-skills"] || []}
      />
    </EmorphedBox>
  );
};

export default Experience;
