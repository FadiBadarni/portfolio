import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { SkillBox } from "./SkillBox";

const SkillsView = ({ skillsData, setSelectedSkill }) =>
  skillsData.map((group) => (
    <Box sx={{ marginBottom: "20px" }} key={group.level}>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 1,
        }}
      >
        {group.level}
      </Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {group.skills.map((skill) => (
          <SkillBox
            skill={skill}
            key={skill.name}
            setSelectedSkill={setSelectedSkill}
          />
        ))}
      </Box>
    </Box>
  ));

export default SkillsView;
