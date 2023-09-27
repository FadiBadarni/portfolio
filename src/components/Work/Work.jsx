import React from "react";
import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
} from "@mui/material";
import { EmorphedBox } from "components/core/EmorphedBox";
import Colors from "utilities/Colors";

const workSteps = [
  {
    label: "Frontend Developer Intern at Bridgify",
    description: "Worked on developing the UI for a CMS.",
    completed: true,
    date: "Aug 13th 2023 - Sep 20th 2023",
  },
];

const educationSteps = [
  {
    label: "Bachelors in Software Engineering",
    description: "Sami Shamoon College of Engineering.",
    completed: false,
    date: "2020-2024",
  },
];

const StepComponent = ({ steps }) => {
  return (
    <Box sx={{ maxWidth: 400, mb: 4 }}>
      <Stepper orientation="vertical" nonLinear={true}>
        {steps.map((step) => (
          <Step
            key={step.label}
            completed={step.completed}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "black",
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: `${Colors.aestheticSilver}`,
              },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black",
              },
            }}
          >
            <StepLabel>{`${step.label} | ${step.date}`}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const Work = () => {
  return (
    <EmorphedBox>
      <Typography variant="h4" align="center" mb={4}>
        Work & Education Section
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="left" mb={2}>
            Work History
          </Typography>
          <StepComponent steps={workSteps} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="left" mb={2}>
            Education Timeline
          </Typography>
          <StepComponent steps={educationSteps} />
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Work;
