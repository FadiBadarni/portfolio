import React, { useState } from "react";
import { Typography, Grid, Divider, Box } from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";
import { projectsData } from "./projectsData";
import ProjectDetails from "./ProjectDetails";
import { EmorphedBoxVariant } from "components/core/EmorphedBoxVariant";
import { MaskedTypography } from "components/core/MaskedTypography";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <EmorphedBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pr: 2,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(
                  rgba(255, 255, 255, 0.5) 0%,
                  rgba(255, 255, 255, 0.05) 100%
                )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Projects
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0.01) 100%
                )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {projectsData.length}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2, background: "white" }} />
          <Box
            sx={{
              zIndex: 2,
              height: "400px",
              overflowY: "scroll",
              overflowX: "visible",
              "&::-webkit-scrollbar": { width: "0px", height: "0px" },
              position: "relative",
            }}
          >
            <Grid container spacing={2} direction="column">
              {projectsData.map((project, index) => (
                <Grid item xs={12} key={index}>
                  <EmorphedBoxVariant
                    isActive={
                      selectedProject && selectedProject.title === project.title
                    }
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "all 0.5s ease-in-out",
                      p: 2,
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <MaskedTypography variant="h5">
                      {project.title}
                    </MaskedTypography>
                    <MaskedTypography variant="subtitle2">
                      {project.type}
                    </MaskedTypography>
                  </EmorphedBoxVariant>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <ProjectDetails selectedProject={selectedProject} />
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Projects;
