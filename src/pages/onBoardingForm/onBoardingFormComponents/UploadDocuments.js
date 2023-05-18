import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Paper,Grid,TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useFormik } from "formik";

import { documentsValidation } from "../../../validation/ValidationSchema";
import { makeStyles } from "@mui/styles";




const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiInputBase-input": {
      // Adjust padding as needed
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#FF9933",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "orange",
    },
    width: "100%",
  },
}));

function UploadDocuments({ handleNext, handleBack, steps, activeStep }) {
 


  const classes = useStyles();

  

  const initialValues = {
    educationCertificate: [
      {
        documentName: "",
        document: "",
      },
    ],
    adharNumber: "",
    adharDocument: "",
    panCardNumber: "",
    panCardDocument: "",
    presentAddress: "",
    permanentAddress: "",
    checkBox: "",
    latestExperienceLetter: "",
    latestRelievingLetter: "",
    salarySlips: "",
    form16: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    handleNext();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: documentsValidation,
  });
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "50px" }}>
        <Typography variant="h4" marginLeft={"20px"}>
          Documents
        </Typography>
        <form onSubmit={formik.handleSubmit} >
          <Grid container spacing={2} padding={3}>
            <Grid item xs={6}>
            <TextField
                  fullWidth
                  name="adharNumber"
                  placeholder=""
                  label="Adhaar Number"
                  className={classes.textField}
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.adharNumber}
                  error={
                  formik.errors.adharNumber
                  }
                  helperText={
                   formik.errors.adharNumber
                  }
                />
            </Grid>
            {/* <Grid item xs={6}>
            </Grid> */}
          </Grid>
        </form>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1, marginBottom: "20px" }}
          >
            Back
          </Button>
          <Button
            onClick={formik.handleSubmit}
            sx={{
              backgroundColor: "#ffaa54",
              color: "white",
              marginBottom: "20px",
              "&:hover": {
                backgroundColor: "#FF9933", // Set the desired color on hover
              },
            }}
            disabled={!(formik.isValid && formik.dirty)}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Paper>
    </>
  );
  // <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , justifyContent: 'space-between',margin:'20px'}}>
  // <Button
  //   color="inherit"
  //   disabled={activeStep === 0}
  //   onClick={handleBack}
  //   sx={{ mr: 1,marginBottom:'20px' }}
  // >
  //   Back
  // </Button>
  {
    /* <Button onClick={formik.handleSubmit} sx={{backgroundColor:'#ffaa54',color:'white',marginBottom:'20px', '&:hover': {
    backgroundColor: '#FF9933', // Set the desired color on hover
  },}} disabled={!(formik.isValid && formik.dirty) } >
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </Button> */
  }
  // </Box>
}

export default UploadDocuments;
