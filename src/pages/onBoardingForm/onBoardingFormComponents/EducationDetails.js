import React, { useEffect } from "react";
import { Box, FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import {MenuItem,Select,FormControl,InputLabel} from "@mui/material";
import { educationDetailsValidation } from "../../../validation/ValidationSchema";

function EducationDetails({ activeStep, handleNext, handleBack, steps,educationDetailsData,setEducationDetailsData }) {
  const educationTypes = [
    "High School Diploma",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree"
  ];
  const institutes = [
    "Indian Institute of Technology Bombay",
    "Indian Institute of Science Education and Research Kolkata",
    "University of Delhi",
    "Jawaharlal Nehru University",
    "Banaras Hindu University"
  ];
  const courses = ['JavaScript', 'Python', 'Java', 'Ruby', 'C++'];

  const passingYears = ['2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21'];


  
  const initialValues = {
    educationDetails: [
      {
        educationType: "",
        instituteName: "",
        course: "",
        cgpa: "",
        passingYear: "",
      },
    ],
    experienceDetails: [
      {
        totalExperience: "",
        company:"",
        designation:"",
        technology:"",
        fromDate:"",
        toDate:"",
        reasonForJobChange:"",
        checkBox:"",
      }
    ]
  };
  const handleAddFields = () => {
    formik.setValues({
      ...formik.values,
      educationDetails: [
        ...formik.values.educationDetails,
        {
          educationType: "",
          instituteName: "",
          course: "",
          cgpa: "",
          passingYear: "",
        },
      ],
    });
  };
  const handleAddExperience = () =>{
    formik.setValues({
      ...formik.values,
      experienceDetails:[
        ...formik.values.experienceDetails,
        {
          totalExperience: "",
          company:"",
          designation:"",
          technology:"",
          fromDate:"",
          toDate:"",
          reasonForJobChange:"",
          checkBox:""
        }
      ]
    })
  }
  const handleRemoveExperience = (index) => {
    const experienceDetails = [...formik.values.experienceDetails];
    experienceDetails.splice(index, 1);
    formik.setValues({
      ...formik.values,
      experienceDetails,
    })
  }
  const handleRemoveFields = (index) => {
    const educationDetails = [...formik.values.educationDetails];
    educationDetails.splice(index, 1);
    formik.setValues({
      ...formik.values,
      educationDetails,
    });
  };

  const onSubmit = (values) => {
    console.log(values);
    setEducationDetailsData(values)
    handleNext();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: educationDetailsValidation,
  });
  useEffect(() => {
    if(educationDetailsData!=null){
      formik.setValues(educationDetailsData)
    }
  },[])
console.log(formik.errors)
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "50px" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4" marginLeft={"20px"}>
            Educational Details
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#FF9933" }}
            onClick={handleAddFields}
          >
            Add Education
          </Button>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          {formik.values.educationDetails.map((education, index) => (
            <Grid container spacing={2} padding={3} key={index}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Education Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="educationType"
                    value={formik.values.educationDetails[index].educationType}
                    label="Education Type"
                    name={`educationDetails[${index}].educationType`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].educationType &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].educationType
                  }
                 
                  >
                    {educationTypes.map((type,index)=>
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    )}
                  </Select>
                  {
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].educationType &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].educationType &&
                    <FormHelperText style={{ color: "red" }}>
                  {formik.errors.educationDetails[index].educationType}
                </FormHelperText>
                      
                  }
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Institute Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="instituteName"
                    value={formik.values.educationDetails[index].instituteName}
                    label="Institute Name"
                    name={`educationDetails[${index}].instituteName`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].instituteName &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].instituteName
                  }
                  
                  >
                    {institutes.map((type,index)=>
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    )}
                  </Select>
                  {
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].instituteName &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].instituteName &&
                    <FormHelperText style={{ color: "red" }}>
                  {formik.errors.educationDetails[index].instituteName}
                </FormHelperText>
                  }
                </FormControl>
              </Grid>
              <Grid item xs={3}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="course"
                    value={formik.values.educationDetails[index].course}
                    label="Course"
                    name={`educationDetails[${index}].course`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].course &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].course
                  }
                  
                  >
                    {courses.map((type,index)=>
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    )}
                  </Select>
                  {
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].course &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].course &&
                    <FormHelperText style={{ color: "red" }}>
                  {formik.errors.educationDetails[index].course}
                </FormHelperText>
                  }
                </FormControl>
                
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`educationDetails[${index}].cgpa`}
                  placeholder=""
                  label="CGPA/Percentage"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.educationDetails[index].cgpa}
                  error={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].cgpa &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].cgpa
                  }
                  helperText={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].cgpa &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].cgpa
                      ? formik.errors.educationDetails[index].cgpa
                      : null
                  }
                />
              </Grid>
              <Grid item xs={3}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Passing Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="passingYear"
                    value={formik.values.educationDetails[index].passingYear}
                    label="Passing Year"
                    name={`educationDetails[${index}].passingYear`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].passingYear &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].passingYear
                  }
                  
                  >
                    {passingYears.map((type,index)=>
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    )}
                  </Select>
                  {
                    formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].passingYear &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].passingYear &&
                    <FormHelperText style={{ color: "red" }}>
                  {formik.errors.educationDetails[index].passingYear}
                </FormHelperText>
                  }
                </FormControl>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FF9933" }}
                  size="small"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
          <Box display="flex" justifyContent="space-between">
          <Typography variant="h4" marginLeft={"20px"}>
            Experience Details
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#FF9933" }}
            onClick={handleAddExperience}
          >
            Add Experience
          </Button>
        </Box>
        {formik.values.experienceDetails.map((item,index)=>(
          <Grid container spacing={2} padding={3} key={index}>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].totalExperience`}
                  placeholder=""
                  label="Total Experience"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].totalExperience}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].totalExperience &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].totalExperience
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].totalExperience &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].totalExperience
                      ? formik.errors.experienceDetails[index].totalExperience
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].company`}
                  placeholder=""
                  label="Company"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].company}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].company &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].company
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].company &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].company
                      ? formik.errors.experienceDetails[index].company
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].designation`}
                  placeholder=""
                  label="designation"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].designation}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].designation &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].designation
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].designation &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].designation
                      ? formik.errors.experienceDetails[index].designation
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].technology`}
                  placeholder=""
                  label="Technology"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].technology}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].technology &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].technology
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].technology &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].technology
                      ? formik.errors.experienceDetails[index].technology
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].fromDate`}
                  placeholder=""
                  label="From date"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].fromDate}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].fromDate &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].fromDate
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].fromDate &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].fromDate
                      ? formik.errors.experienceDetails[index].fromDate
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].toDate`}
                  placeholder=""
                  label="To date"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].toDate}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].toDate &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].toDate
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].toDate &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].toDate
                      ? formik.errors.experienceDetails[index].toDate
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].reasonForJobChange`}
                  placeholder=""
                  label="Reason for job change"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].reasonForJobChange}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].reasonForJobChange &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].reasonForJobChange
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].reasonForJobChange &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].reasonForJobChange
                      ? formik.errors.experienceDetails[index].reasonForJobChange
                      : null
                  }
                />
              </Grid>
          <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`experienceDetails[${index}].checkBox`}
                  placeholder=""
                  label="checkbox"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.experienceDetails[index].checkBox}
                  error={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].checkBox &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].checkBox
                  }
                  helperText={
                    formik.errors.experienceDetails &&
                    formik.errors.experienceDetails[index] &&
                    formik.errors.experienceDetails[index].checkBox &&
                    formik.touched.experienceDetails &&
                    formik.touched.experienceDetails[index] &&
                    formik.touched.experienceDetails[index].checkBox
                      ? formik.errors.experienceDetails[index].checkBox
                      : null
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FF9933" }}
                  size="small"
                  type="button"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Remove
                </Button>
              </Grid>
              </Grid>
        ))}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , justifyContent: 'space-between',margin:'20px'}}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1,marginBottom:'20px' }}
            >
              Back
            </Button>
        <Button onClick={formik.handleSubmit} sx={{backgroundColor:'#ffaa54',color:'white',marginBottom:'20px', '&:hover': {
            backgroundColor: '#FF9933', // Set the desired color on hover
          },}} disabled={!(formik.isValid && formik.dirty) } >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </Box>
        </form>
      </Paper>
      {/* <Box
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
          onClick={handleNext}
          sx={{
            backgroundColor: "#ffaa54",
            color: "white",
            marginBottom: "20px",
            "&:hover": {
              backgroundColor: "#FF9933", // Set the desired color on hover
            },
          }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box> */}
    </>
  );
}

export default EducationDetails;
