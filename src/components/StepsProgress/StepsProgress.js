// src/components/StepsProgress/StepsProgress.js
import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, useTheme, useMediaQuery } from '@mui/material';

const StepsProgress = ({ steps }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Stepper 
        activeStep={activeStep} 
        orientation={isSmallScreen ? 'vertical' : 'horizontal'} 
        alternativeLabel={!isSmallScreen}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button 
          onClick={() => setActiveStep(prevStep => prevStep === 0 ? steps.length - 1 : prevStep - 1)}
          disabled={steps.length <= 1}
        >
          Back
        </Button>
        <Button 
          onClick={() => setActiveStep(prevStep => (prevStep + 1) % steps.length)}
          sx={{ ml: 2 }}
          color="primary"
          variant="contained"
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default StepsProgress;
