import React, { useState } from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";
import { motion } from "framer-motion";
import Experience from "components/Experience/Experience";

const skillsData = [
  {
    level: "Advanced",
    skills: [
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "SASS", icon: "sass/sass-original.svg" },
      { name: "Python", icon: "python/python-original.svg" },
      { name: "Java", icon: "java/java-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "Spring", icon: "spring/spring-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
    ],
  },
  {
    level: "Intermediate",
    skills: [
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "React", icon: "react/react-original.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
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

const SkillBox = ({ skill, setSelectedSkill }) => (
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
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
        alt={`${skill.name} logo`}
        width="20"
        height="20"
      />

      <Typography variant="body2">{skill.name}</Typography>
    </Box>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <EmorphedBox>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {skillsData.map((group) => (
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
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedSkill && (
            <Experience key={selectedSkill} selectedSkill={selectedSkill} />
          )}
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Skills;
