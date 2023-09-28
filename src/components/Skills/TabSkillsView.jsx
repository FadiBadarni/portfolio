import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { SkillBox } from "./SkillBox";

const TabSkillsView = ({
  selectedTab,
  handleChange,
  skillsData,
  setSelectedSkill,
}) => (
  <>
    <Tabs value={selectedTab} onChange={handleChange}>
      {skillsData.map((group, index) => (
        <Tab label={group.level} key={index} />
      ))}
    </Tabs>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {skillsData[selectedTab].skills.map((skill) => (
        <SkillBox
          skill={skill}
          key={skill.name}
          setSelectedSkill={setSelectedSkill}
        />
      ))}
    </Box>
  </>
);

export default TabSkillsView;
