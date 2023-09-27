import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { EmorphedBox } from "./EmorphedBox";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const SocialMediaContainer = () => {
  const githubControls = useAnimation();
  const linkedInControls = useAnimation();
  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (controls, name) => {
    if (activeIcon) {
      if (activeIcon === "GitHub") {
        githubControls.start({ opacity: 0, width: 0 });
      } else if (activeIcon === "LinkedIn") {
        linkedInControls.start({ opacity: 0, width: 0 });
      }
    }
    controls.start({
      opacity: 1,
      width: "auto",
    });
    setActiveIcon(name);
  };

  return (
    <EmorphedBox
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "4rem",
        width: "100%",
        mt: 5,
        borderRadius: "20px",
        overflow: "hidden",
        p: 3,
        position: "relative",
        boxShadow:
          "0 0 20px 3px rgba(255, 255, 255, 0.2), 0 0 10px 2px rgba(255, 255, 255, 0.1)",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: -1,
        },
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
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
        onMouseEnter={() => handleMouseEnter(githubControls, "GitHub")}
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
            <Typography variant="h6">Github</Typography>
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
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
        onMouseEnter={() => handleMouseEnter(linkedInControls, "LinkedIn")}
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
            <Typography variant="h6">LinkedIn</Typography>
          </Box>
        </motion.div>
      </Box>
    </EmorphedBox>
  );
};
