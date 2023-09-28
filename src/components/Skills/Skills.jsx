import React, { useState } from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";
import Experience from "components/Experience/Experience";
import TabSkillsView from "./TabSkillsView";
import SkillsView from "./SkillsView";

const skillsData = [
  {
    level: "Advanced",
    skills: [
      { name: "Java", icon: "java/java-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "Spring", icon: "spring/spring-original.svg" },
      { name: "Python", icon: "python/python-original.svg" },
      { name: "Git", icon: "git/git-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "SASS", icon: "sass/sass-original.svg" },
    ],
  },
  {
    level: "Intermediate",
    skills: [
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "React", icon: "react/react-original.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-original.svg" },
      { name: "TypeScript", icon: "typescript/typescript-original.svg" },
      { name: "C", icon: "c/c-original.svg" },
      { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    level: "Beginner",
    skills: [{ name: "Next", icon: "nextjs/nextjs-original.svg" }],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <EmorphedBox>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: isMobile ? "center" : "left",
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {isMobile ? (
            <TabSkillsView
              selectedTab={selectedTab}
              handleChange={handleChange}
              skillsData={skillsData}
              setSelectedSkill={setSelectedSkill}
            />
          ) : (
            <SkillsView
              skillsData={skillsData}
              setSelectedSkill={setSelectedSkill}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Experience key={selectedSkill} selectedSkill={selectedSkill} />
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Skills;
