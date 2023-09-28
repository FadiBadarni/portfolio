import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { SkillBox } from "./SkillBox";
import Colors from "utilities/Colors";

const TabSkillsView = ({
  selectedTab,
  handleChange,
  skillsData,
  setSelectedSkill,
}) => (
  <>
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      variant="fullWidth"
      centered
      TabIndicatorProps={{
        style: {
          background: `${Colors.cultered}`,
        },
      }}
    >
      {skillsData.map((group, index) => (
        <Tab
          label={group.level}
          key={index}
          style={{
            color: `${Colors.cultered}`,
          }}
        />
      ))}
    </Tabs>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        m: 2,
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
