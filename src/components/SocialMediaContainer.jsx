import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { EmorphedBox } from "./EmorphedBox";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const SocialMediaContainer = () => {
  const githubControls = useAnimation();
  const linkedInControls = useAnimation();

  const handleMouseEnter = (controls) => {
    controls.start({
      opacity: 1,
      width: "auto",
    });
  };

  const handleMouseLeave = (controls) => {
    controls.start({
      opacity: 0,
      width: 0,
    });
  };

  return (
    <EmorphedBox
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "4rem",
        width: "100%",
        mt: 5,
        borderRadius: "20px",
        overflow: "hidden",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "0.5rem",
          border: "2px solid #000",
          p: 0.2,
          m: 1,
        }}
        onMouseEnter={() => handleMouseEnter(githubControls)}
        onMouseLeave={() => handleMouseLeave(githubControls)}
      >
        <GitHub
          sx={{
            fontSize: "2.5rem",
          }}
        />
        <motion.div initial={{ opacity: 0, width: 0 }} animate={githubControls}>
          <Box
            sx={{
              borderRadius: "12px",
              padding: "4px 8px",
            }}
          >
            <Typography variant="body2">Github</Typography>
          </Box>
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "0.5rem",
          border: "2px solid #000",
          p: 0.2,
          m: 1,
        }}
        onMouseEnter={() => handleMouseEnter(linkedInControls)}
        onMouseLeave={() => handleMouseLeave(linkedInControls)}
      >
        <LinkedIn
          sx={{
            fontSize: "2.5rem",
          }}
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={linkedInControls}
        >
          <Box
            sx={{
              borderRadius: "12px",
              padding: "4px 8px",
            }}
          >
            <Typography variant="body2">LinkedIn</Typography>
          </Box>
        </motion.div>
      </Box>
    </EmorphedBox>
  );
};
