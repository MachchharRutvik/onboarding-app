import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function UploadDocuments({handleNext,handleBack,steps,activeStep,}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , justifyContent: 'space-between',margin:'20px'}}>
    <Button
      color="inherit"
      disabled={activeStep === 0}
      onClick={handleBack}
      sx={{ mr: 1,marginBottom:'20px' }}
    >
      Back
    </Button>
{/* <Button onClick={formik.handleSubmit} sx={{backgroundColor:'#ffaa54',color:'white',marginBottom:'20px', '&:hover': {
    backgroundColor: '#FF9933', // Set the desired color on hover
  },}} disabled={!(formik.isValid && formik.dirty) } >
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </Button> */}
</Box>
  )
}

export default UploadDocuments