import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export const SkillBox = ({ skill, setSelectedSkill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    onClick={() => setSelectedSkill(skill.name)}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {skill.icon && (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
          alt={`${skill.name} logo`}
          width="20"
          height="20"
        />
      )}

      <Typography variant="body2">{skill.name}</Typography>
    </Box>
  </motion.div>
);
