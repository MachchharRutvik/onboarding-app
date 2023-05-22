import React, { useEffect } from "react";
import { Box, FormGroup, FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { v4 as uuid } from "uuid";
import { educationDetailsValidation } from "../../../validation/EducationDetailsSchema";

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

function EducationDetails({
  activeStep,
  handleNext,
  handleBack,
  steps,
  educationDetailsData,
  setEducationDetailsData,
}) {
  const classes = useStyles();

  useEffect(() => {
    setAllTheData();
   }, []);
  
  const educationTypes = [
    "High School Diploma",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree",
  ];
  const institutes = [
    "Indian Institute of Technology Bombay",
    "Indian Institute of Science Education and Research Kolkata",
    "University of Delhi",
    "Jawaharlal Nehru University",
    "Banaras Hindu University",
  ];
  const courses = ["JavaScript", "Python", "Java", "Ruby", "C++"];

  const passingYears = [
    "2011-12",
    "2012-13",
    "2013-14",
    "2014-15",
    "2015-16",
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
  ];

  const experience = ["0-1", "2-5", "5-10", "10+"];
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Java",
    "Ruby",
    "PHP",
  ];

  const initialValues = {
    educationDetails: [
      {
        id: uuid(),
        educationType: "",
        instituteName: "",
        course: "",
        cgpa: "",
        passingYear: "",
      },
    ],
    totalExperience: "0",
  };
  const handleAddFields = () => {
    formik.setValues({
      ...formik.values,
      educationDetails: [
        ...formik.values.educationDetails,
        {
          id: uuid(),
          educationType: "",
          instituteName: "",
          course: "",
          cgpa: "",
          passingYear: "",
        },
      ],
    });
  };
  const handleAddExperience = () => {
    formik.setValues({
      ...formik.values,
      experienceDetails: [
        ...formik.values.experienceDetails,
        {
          id: uuid(),
          company: "",
          designation: "",
          technology: "",
          fromDate: "",
          toDate: "",
          reasonForJobChange: "",
          checkBox: false,
        },
      ],
    });
  };

  const handleRemoveFields = (id) => {
    let educationArray = formik.values.educationDetails.filter((ele) => {
      return ele.id !== id;
    });
    formik.setValues({
      ...formik.values,
      educationDetails: educationArray,
    });
  };
  const handleRemoveExperience = (id) => {
    console.log(id);
    if (formik.values.experienceDetails.length > 1) {
      let experienceArray = formik.values.experienceDetails.filter((ele) => {
        return ele.id !== id;
      });
      formik.setValues({
        ...formik.values,
        experienceDetails: experienceArray,
      });
    }
  };
  const onSubmit = (values) => {
    setEducationDetailsData(values);
    handleNext();
  };
  const handleBackButton = () => {
    setEducationDetailsData(formik.values);
    handleBack();
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: educationDetailsValidation,
  });


  const setAllTheData =()=>{
    if (educationDetailsData != null) {
      formik.setValues(educationDetailsData);
    }
  }

  const handleChangeOfTotalExperience = (event) => {
    
    const totalExperienceString = event.target.value;
    const totalExperience = parseInt(totalExperienceString);

    formik.setFieldValue("totalExperience", totalExperienceString);

    if (totalExperience > 0 && totalExperience <= 50) {
      formik.setFieldValue("experienceDetails", [
        {
          id: uuid(),
          company: "",
          designation: "",
          technology: "",
          fromDate: "",
          toDate: "",
          reasonForJobChange: "",
          checkBox: false,
        },
      ]);
    } else {
      formik.setFieldValue("experienceDetails", []);
    }
  };

  const handleCheckBox = (e, id) => {
    console.log("ID", id);
    // formik.handleChange(e)
    const experienceArray = formik.values.experienceDetails.map((ele) => {
      if (ele.id === id) {
        return { ...ele, checkBox: e.target.checked, toDate: "Present" };
        
      } else {
        return ele;
      }
    });
    formik.setFieldValue("experienceDetails", experienceArray);
  };
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
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="demo-simple-select-label">
                    Education Type
                  </InputLabel>
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
                    {educationTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].educationType &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].educationType && (
                      <FormHelperText style={{ color: "red" }}>
                        {formik.errors.educationDetails[index].educationType}
                      </FormHelperText>
                    )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="demo-simple-select-label">
                    Institute Name
                  </InputLabel>
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
                    {institutes.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].instituteName &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].instituteName && (
                      <FormHelperText style={{ color: "red" }}>
                        {formik.errors.educationDetails[index].instituteName}
                      </FormHelperText>
                    )}
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth className={classes.textField}>
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
                    {courses.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].course &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].course && (
                      <FormHelperText style={{ color: "red" }}>
                        {formik.errors.educationDetails[index].course}
                      </FormHelperText>
                    )}
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  name={`educationDetails[${index}].cgpa`}
                  placeholder=""
                  label="CGPA/Percentage"
                  className={classes.textField}
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
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="demo-simple-select-label">
                    Passing Year
                  </InputLabel>
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
                    {passingYears.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.errors.educationDetails &&
                    formik.errors.educationDetails[index] &&
                    formik.errors.educationDetails[index].passingYear &&
                    formik.touched.educationDetails &&
                    formik.touched.educationDetails[index] &&
                    formik.touched.educationDetails[index].passingYear && (
                      <FormHelperText style={{ color: "red" }}>
                        {formik.errors.educationDetails[index].passingYear}
                      </FormHelperText>
                    )}
                </FormControl>
              </Grid>
              {index > 0 && (
                <Grid item xs={1}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FF9933" }}
                    size="small"
                    type="button"
                    onClick={() => handleRemoveFields(education.id)}
                  >
                    Remove
                  </Button>
                </Grid>
              )}
            </Grid>
          ))}
          <Typography variant="h4" marginLeft={"20px"}>
            Experience Details
          </Typography>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="totalExperience"
                className={classes.textField}
                placeholder=""
                label="Total Experience"
                type="text"
                onBlur={formik.handleBlur}
                onChange={(e) => handleChangeOfTotalExperience(e)}
                value={formik.values.totalExperience}
                error={
                  formik.errors.totalExperience &&
                  formik.touched.totalExperience
                }
                helperText={
                  formik.errors.totalExperience &&
                  formik.touched.totalExperience
                    ? formik.errors.totalExperience
                    : null
                }
              ></TextField>
            </Grid>
            {formik.values.totalExperience > 0 &&
              formik.values.totalExperience <= 50 &&
              formik.values.experienceDetails && (
                <Grid item xs={2}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "#FF9933" }}
                    onClick={handleAddExperience}
                  >
                    Add Experience
                  </Button>
                </Grid>
              )}
          </Grid>

          {formik.values.totalExperience > 0 &&
            formik.values.totalExperience <= 50 &&
            formik.values.experienceDetails &&
            formik.values.experienceDetails.map((item, index) => (
              <Grid container spacing={2} padding={3} key={index}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name={`experienceDetails[${index}].company`}
                    className={classes.textField}
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
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    className={classes.textField}
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
                <Grid item xs={6}>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="demo-simple-select-label">
                      Technology
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="technology"
                      value={formik.values.experienceDetails[index].technology}
                      label="Technology"
                      name={`experienceDetails[${index}].technology`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.experienceDetails &&
                        formik.errors.experienceDetails[index] &&
                        formik.errors.experienceDetails[index].technology &&
                        formik.touched.experienceDetails &&
                        formik.touched.experienceDetails[index] &&
                        formik.touched.experienceDetails[index].technology
                      }
                    >
                      {technologies.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.errors.experienceDetails &&
                      formik.errors.experienceDetails[index] &&
                      formik.errors.experienceDetails[index].technology &&
                      formik.touched.experienceDetails &&
                      formik.touched.experienceDetails[index] &&
                      formik.touched.experienceDetails[index].technology && (
                        <FormHelperText style={{ color: "red" }}>
                          {formik.errors.experienceDetails[index].technology}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name={`experienceDetails[${index}].reasonForJobChange`}
                    placeholder=""
                    label="Reason for job change"
                    className={classes.textField}
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={
                      formik.values.experienceDetails[index].reasonForJobChange
                    }
                    error={
                      formik.errors.experienceDetails &&
                      formik.errors.experienceDetails[index] &&
                      formik.errors.experienceDetails[index]
                        .reasonForJobChange &&
                      formik.touched.experienceDetails &&
                      formik.touched.experienceDetails[index] &&
                      formik.touched.experienceDetails[index].reasonForJobChange
                    }
                    helperText={
                      formik.errors.experienceDetails &&
                      formik.errors.experienceDetails[index] &&
                      formik.errors.experienceDetails[index]
                        .reasonForJobChange &&
                      formik.touched.experienceDetails &&
                      formik.touched.experienceDetails[index] &&
                      formik.touched.experienceDetails[index].reasonForJobChange
                        ? formik.errors.experienceDetails[index]
                            .reasonForJobChange
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#FF9933",
                            "&.Mui-checked": {
                              color: "#FF9933",
                            },
                          }}
                          name={`experienceDetails[${index}].checkBox`}
                          onChange={(e) => handleCheckBox(e, item.id)}
                          value={
                            formik.values.experienceDetails[index].checkBox
                          }
                          checked={
                            formik.values.experienceDetails[index].checkBox
                          }
                        />
                      }
                      label="Mark if the company is present"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name={`experienceDetails[${index}].fromDate`}
                    placeholder=""
                    label="From date"
                    className={classes.textField}
                    type="date"
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                {formik.values.experienceDetails[index].checkBox === false ? (
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name={`experienceDetails[${index}].toDate`}
                      placeholder=""
                      label="To date"
                      className={classes.textField}
                      type="date"
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
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                ) : null}
                {index > 0 && (
                  <Grid item xs={1}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#FF9933" }}
                      size="small"
                      type="button"
                      onClick={() => handleRemoveExperience(item.id)}
                    >
                      Remove
                    </Button>
                  </Grid>
                )}
              </Grid>
            ))}
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
              onClick={handleBackButton}
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
              disabled={!(formik.isValid)}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
}

export default EducationDetails;
