import React, { useEffect } from "react";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import {Grid} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ConfirmationSchema } from "../../../validation/ConfirmationSchema";


function Confirmation({ handleNext, handleBack, steps, activeStep,personalDetailsData,educationDetailsData,documentsData,setActiveStep }) 
{
  const navigate = useNavigate()

  // edit data by going to that step
  const handleEdit = (step) =>{
    console.log(step)
    setActiveStep(step)
  }

  // finish button
  const handleFinish = () =>{
    navigate("/success") // navigate to success page
  }

  const formik = useFormik({
    initialValues:{
      checkbox:false
    },
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema:ConfirmationSchema
  })

  // accept terms & conditions
  const handleCheckbox = () =>{
    formik.setFieldValue("checkbox",!formik.values.checkbox)
  }

  return (
    <Paper elevation={3} sx={{ marginTop: "50px" }}>
      <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" marginLeft={"20px"}>
        Personal Details
      </Typography>
      <IconButton sx={{marginRight:"20px"}} onClick={()=>handleEdit(0)} >
      <ModeEditIcon  />
      </IconButton>
      </Box>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>

      <Grid container spacing={2} padding={3}>
      {personalDetailsData && personalDetailsData.profilePicture &&
      <Grid item xs={12}>
        <img src={URL.createObjectURL(personalDetailsData.profilePicture)} alt="Profile Photo"  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}/>
      </Grid>}
        <Grid item xs={4} >
          <Typography>First Name:{personalDetailsData.firstName  || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
          <Typography>Middle Name:{personalDetailsData.middleName  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Last Name:{personalDetailsData.lastName  || ""} </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Date of Birth:{personalDetailsData.dateOfBirth  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Email:{personalDetailsData.email  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Contact Number:{personalDetailsData.contactNumber  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Alternate Contact Number:{personalDetailsData.alternateContactNumber  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Gender:{personalDetailsData.gender  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Github:{personalDetailsData.github  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>LinkedIn:{personalDetailsData.linkedIn  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Blood Group:{personalDetailsData.alternateContactNumber  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Marital Status:{personalDetailsData.maritalStatus  || ""}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" marginLeft={"20px"}>
        Bank Details
      </Typography>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={6} >
          <Typography>Bank Name:{personalDetailsData.bankName  || ""}</Typography>
        </Grid>
        <Grid item xs={6} >
          <Typography>Account Number:{personalDetailsData.accountNumber  || ""}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>IFSC code:{personalDetailsData.ifscCode  || ""} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Branch:{personalDetailsData.branch  || ""}</Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" marginLeft={"20px"}>
        Education Details
      </Typography>
      <IconButton sx={{marginRight:"20px"}} onClick={()=>handleEdit(1)} >
      <ModeEditIcon  />
      </IconButton>
      </Box>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      {educationDetailsData && educationDetailsData.educationDetails && educationDetailsData.educationDetails.map((item, index) => (
      <Grid container spacing={2} padding={3} key={index}>
        <Grid item xs={4} >
          <Typography>Education Type:{item.educationType  || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
          <Typography>Institute Name:{item.instituteName  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Course:{item.course  || ""} </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>CGPA / Percentage:{item.cgpa  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Passing Year:{item.passingYear  || ""}</Typography>
        </Grid>
      </Grid>
        
      ))}
      <Typography variant="h4" marginLeft={"20px"}>
        Experience Details
      </Typography>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Grid container spacing={2} padding={3}>
      <Grid item xs={4} >
          <Typography>Total Experience:{educationDetailsData.totalExperience  || ""}</Typography>
        </Grid>
        </Grid>
      {educationDetailsData && educationDetailsData.experienceDetails && educationDetailsData.experienceDetails.map((item, index) => (
      <Grid container spacing={2} padding={3}>
       
        <Grid item xs={4} >
          <Typography>Company:{item.company  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Designation:{item.designation  || ""} </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Technology:{item.technology  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>From Date:{item.fromDate  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>To Date:{item.toDate  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Reason For Job Change:{item.reasonForJobChange  || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Checkbox:{item.checkBox  || ""}</Typography>
        </Grid>
      </Grid>
      ))}
      <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" marginLeft={"20px"}>
       Documents
      </Typography>
      <IconButton sx={{marginRight:"20px"}} onClick={()=>handleEdit(2)} >
      <ModeEditIcon  />
      </IconButton>
      </Box>
      {documentsData && <>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Grid container spacing={2} padding={3} >
        <Grid item xs={4} >
        <Typography>Adhaar Number:{documentsData.adharNumber   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Adhaar Front:{documentsData.adharFront?.name  || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Adhaar Back:{documentsData.adharBack?.name   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Pancard Number:{documentsData.panCardNumber   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Pancard:{documentsData.panCardDocument?.name  || ""}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" marginLeft={"20px"}>
        Address Details 
      </Typography>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Typography variant="h6" marginLeft={"20px"}>
       Present Address Details 
      </Typography>
      <Grid container spacing={2} padding={3} >
        <Grid item xs={4} >
        <Typography>Street Line 1:{documentsData.streetLine1   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Street Line 2:{documentsData.streetLine2   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Country:{documentsData.country   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>State:{documentsData.state   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>City:{documentsData.city   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Area:{documentsData.area   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Postal Code:{documentsData.postalCode   || ""}</Typography>
        </Grid>
        </Grid>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Typography variant="h6" marginLeft={"20px"}>
       Permanent Address Details 
      </Typography>
      <Grid container spacing={2} padding={3} >
        <Grid item xs={4} >
        <Typography>Street Line 1:{documentsData.perStreetLine1   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Street Line 2:{documentsData.perStreetLine2   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Country:{documentsData.perCountry   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>State:{documentsData.perState   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>City:{documentsData.perCity   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Area:{documentsData.perArea   || ""}</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography>Postal Code:{documentsData.perPostalCode   || ""}</Typography>
        </Grid>
        </Grid>
        <Typography variant="h4" marginLeft={"20px"}>
        Educational Certificates  
      </Typography>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/> </>}
      {documentsData && documentsData.educationCertificate && documentsData.educationCertificate.map((item,index)=>(
      <Grid container spacing={2} padding={3} key={index}>
        <Grid item xs={4}>
        <Typography>{item.documentName || ""}:{item.document?.name || ""}</Typography>
        </Grid>
      </Grid>
      ))}
      {documentsData && 
      <>
      <Typography variant="h4" marginLeft={"20px"}>
        Other Documents  
      </Typography>
      <hr style={{width: "95%",marginLeft:"auto",marginRight:"auto"}}/>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={4}>
        <Typography>Latest Experience Letter:{documentsData.latestExperienceLetter?.name   || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography>Latest Relieving Letter:{documentsData.latestRelievingLetter?.name   || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography>Salary slips:{documentsData.salarySlips?.name   || ""}</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography>Form 16:{documentsData.form16?.name   || ""}</Typography>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="formik.values.checkbox"
                      control={<Checkbox />}
                      label="All the provided documents and informations are True"
                      name="addressSame"
                      sx={{ marginTop: "10px", width: "100%" }}
                      onChange={formik.handleChange}
                      onClick={handleCheckbox}
                    />
                  </FormGroup>
                </FormControl>
        </Grid>
      </Grid></> }
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
            onClick={handleFinish}
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

  );
}

export default Confirmation;
