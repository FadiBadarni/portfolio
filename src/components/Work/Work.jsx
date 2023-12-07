import React from 'react';
import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
} from '@mui/material';
import { EmorphedBox } from 'components/core/EmorphedBox';
import Colors from 'utilities/Colors';
import { educationData } from './educationData';
import { workData } from './workData';

const CustomStepLabel = ({ label, date }) => (
  <Box>
    <Typography
      variant="subtitle1"
      sx={{
        color: `${Colors.cultered}`,
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="caption"
      sx={{
        color: `${Colors.aestheticSilver}`,
      }}
    >
      {date}
    </Typography>
  </Box>
);

const StepComponent = ({ steps }) => {
  return (
    <Box sx={{ maxWidth: 400, mb: 4 }}>
      <Stepper orientation="vertical" nonLinear={true}>
        {steps.map((step) => (
          <Step
            key={step.label}
            completed={step.completed}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'black',
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: `${Colors.cultered}`,
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'black',
              },
            }}
          >
            <StepLabel>
              <CustomStepLabel label={step.label} date={step.date} />
            </StepLabel>
            <StepContent>
              <Typography variant="subtitle2">{step.description}</Typography>
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
          <StepComponent steps={workData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="left" mb={2}>
            Education Timeline
          </Typography>
          <StepComponent steps={educationData} />
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Work;
