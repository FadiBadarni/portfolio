import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Colors from "utilities/Colors";
import { StyledChip } from "components/core/StyledChip";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { EmorphedBoxVariant2 } from "components/core/EmorphedBoxVariant2";
import { motion } from "framer-motion";
import { MaskedButton } from "components/core/MaskedButton";

const ProjectDetails = ({ selectedProject }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <EmorphedBoxVariant2
      style={{
        transition: "all 0.5s",
        height: "500px",
        borderRadius: "15px",
        padding: isMobile ? "1rem" : "2rem",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {selectedProject ? (
        <motion.div
          key={selectedProject.title}
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
            variant={isMobile ? "h6" : "h4"}
            gutterBottom
            component="div"
            color="white"
            align="center"
          >
            {selectedProject.title}
          </Typography>
          <Box
            sx={{
              overflowY: "auto",
              flex: "1",
            }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  color={Colors.aestheticSilver}
                  align="left"
                  sx={{ mb: 1 }}
                >
                  {selectedProject.description}
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={12}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                {selectedProject.URL && (
                  <Grid
                    item
                    xs={6}
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <MaskedButton
                        variant="contained"
                        href={selectedProject.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Live Website
                      </MaskedButton>
                    </Box>
                  </Grid>
                )}

                {selectedProject.repository && (
                  <Grid
                    item
                    xs={6}
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <MaskedButton
                        variant="contained"
                        href={selectedProject.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        GitHub Repo
                      </MaskedButton>
                    </Box>
                  </Grid>
                )}

                {selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <Grid item>
                      <Box sx={{ maxWidth: isMobile ? "260px" : "300px" }}>
                        <Carousel
                          autoPlay
                          infiniteLoop
                          showThumbs={false}
                          showStatus={false}
                          showIndicators={false}
                          dynamicHeight
                        >
                          {selectedProject.images.map((img, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={img}
                                alt={`Project ${index + 1}`}
                                style={{
                                  height: 200,
                                  width: 260,
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          ))}
                        </Carousel>
                      </Box>
                    </Grid>
                  )}
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  {selectedProject.technologies &&
                    Object.keys(selectedProject.technologies).map((category) =>
                      selectedProject.technologies[category].length > 0 ? (
                        <Box
                          key={category}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            m: 0.5,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            color="white"
                            sx={{
                              mb: 0.3,
                            }}
                          >
                            {category[0].toUpperCase() + category.slice(1)}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "10px",
                              justifyContent: "center",
                            }}
                          >
                            {selectedProject.technologies[category].map(
                              (tech, index) => (
                                <StyledChip label={tech} key={index} />
                              )
                            )}
                          </Box>
                        </Box>
                      ) : null
                    )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      ) : (
        <motion.div
          key="placeholder"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
        >
          <Typography variant="h5" color="white">
            Click on a project to see details.
          </Typography>
        </motion.div>
      )}
    </EmorphedBoxVariant2>
  );
};

export default ProjectDetails;
