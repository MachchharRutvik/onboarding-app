import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../../layout/Navbar';
import PersonalDetails from './onBoardingFormComponents/PersonalDetails';
import EducationDetails from './onBoardingFormComponents/EducationDetails';
import UploadDocuments from './onBoardingFormComponents/UploadDocuments';
import Confirmation from './onBoardingFormComponents/Confirmation';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
// import Typography from "@mui/material/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  stepper: {
    backgroundColor: 'transparent',
    // change icon color for all steps
    '& .MuiStepIcon-root': {
      color: 'var(--my-disabled-step-color)', // Customize the color of the Stepper icon
    },
    '& .MuiStepIcon-active': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the active Stepper icon
    },
    '& .MuiStepIcon-completed': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the completed Stepper icon
    },

    // change label color for all steps
    '& .MuiStepLabel-label': {
      color: 'var(--my-disabled-step-color)', // Customize the color of the StepLabel text
    },

    '& .MuiStepLabel-active': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the active StepLabel text
    },
    '& .MuiStepLabel-completed': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the completed StepLabel text
    },
    
    // change connector color for all steps
    '& .MuiStepConnector-line': {
      borderColor: 'var(--my-disabled-step-color)', // Customize the color of the StepConnector line
    },
    // change connector color for active steps
    '& .MuiStepConnector-active': {
      '& .MuiStepConnector-line': {
        borderColor: 'var(--my-brand-color-dark)', // Customize the color of the active StepConnector line
      }
    }
  },
}));



const steps = ['Personal Details', 'Education Details', 'Upload Documents','Confirmation'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const classes = useStyles()
  // const [isPersonalDetailsValid, setIsPersonalDetailsValid] = useState(false);
  const [formData, setFormData] = useState({});
  const [personalDetailsData, setPersonalDetailsData] = useState(null);
  const [educationDetailsData, setEducationDetailsData] = useState(null);
  


  const isStepOptional = (step) => {
    return null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
  
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleFormData = (data)=>{
    setFormData({...formData, ...data});
  }

  return (
    <Box sx={{ width: '100%' }}>
    <Navbar/>
    <Box sx={{width:'90%',margin:'auto',marginTop:'50px'}}>

    <Typography>Akhilesh Patel</Typography>
    <div className={classes.root}>

   
      <Stepper activeStep={activeStep} sx={{marginTop:'50px'}} className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} sx={{color:'#FF9933'}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </div>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <PersonalDetails handleNext={handleNext} handleBack={handleBack}  steps={steps} activeStep={activeStep} setPersonalDetailsData={setPersonalDetailsData} personalDetailsData={personalDetailsData}/>}
          {activeStep === 1 && <EducationDetails activeStep={activeStep} handleNext={handleNext}
          handleBack={handleBack} steps={steps} educationDetailsData={educationDetailsData} setEducationDetailsData={setEducationDetailsData}
          />}
          {activeStep === 2 && <UploadDocuments  activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} steps={steps}/>}
          {activeStep === 3 && <Confirmation />}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1,marginBottom:'20px' }}
            >
              Back
            </Button> */}
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            {/* <Button onClick={handleNext} sx={{backgroundColor:'#ffaa54',color:'white',marginBottom:'20px', '&:hover': {
            backgroundColor: '#FF9933', // Set the desired color on hover
          },}} disabled={!isPersonalDetailsValid} >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Box>
  );
}
