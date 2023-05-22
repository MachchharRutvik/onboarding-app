import { FormHelperText, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { PersonalDetailsSchema } from "../../../validation/PersonalDetailsSchema";

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

function PersonalDetails({
  handleNext,
  handleBack,
  steps,
  activeStep,
  isPersonalDetailsValid,
  setPersonalDetailsData,
  personalDetailsData,
}) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const classes = useStyles();
  useEffect(() => {
   setAllTheData()
  }, []);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // console.log(file)
    setProfilePhoto(URL.createObjectURL(file));
    formik.setFieldValue("profilePicture", file);
  };
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    contactNumber: "",
    email: "",
    alternateContactNumber: "",
    gender: "",
    github: "",
    linkedIn: "",
    bloodGroup: "",
    maritalStatus: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branch: "",
    profilePicture: null,
  };

  const onSubmit = (values) => {
    console.log(values);
    handleNext();
    setPersonalDetailsData(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema: PersonalDetailsSchema,
  });
  const setAllTheData=()=>{
    if (personalDetailsData != null) {
      formik.setValues(personalDetailsData);
      if (personalDetailsData.profilePicture) {
        setProfilePhoto(
          URL.createObjectURL(personalDetailsData.profilePicture)
        );
      }
      console.log(personalDetailsData, "useEffect");
    }
  }

  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "50px" }}>
        <Typography variant="h4" marginLeft={"20px"}>
          Personal Details
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginLeft: "45%",
                }}

              >
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  onBlur={formik.handleBlur("profilePicture")}
                  name="profilePicture"
                  style={{ position: "absolute", top: 0, left: 0, opacity: 0 }}
                />
                <IconButton component="label" htmlFor="file-upload"  >
                  <img
                    src={
                      profilePhoto ||
                      "https://img.icons8.com/cotton/64/gender-neutral-user--v2.png"
                    }
                    alt="Profile"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}

                  />
                  <PhotoCameraIcon
                    style={{ position: "absolute", bottom: 0, right: 0 }}
              

                  />
                </IconButton>

               
              </div>
              {formik.errors.profilePicture && formik.touched.profilePicture &&
                  (
                    <p style={{ color: "red",marginLeft: "42%", }}>
                      {formik.errors.profilePicture}
                    </p>
                  )}
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                fullWidth
                name="firstName"
                placeholder=""
                label="First Name"
                //   className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={formik.errors.firstName && formik.touched.firstName}
                helperText={
                  formik.errors.firstName && formik.touched.firstName
                    ? formik.errors.firstName
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="middleName"
                placeholder=""
                label="Middle Name"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.middleName}
                error={formik.errors.middleName && formik.touched.middleName}
                helperText={
                  formik.errors.middleName && formik.touched.middleName
                    ? formik.errors.middleName
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="lastName"
                placeholder=""
                label="Last Name"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.errors.lastName && formik.touched.lastName}
                helperText={
                  formik.errors.lastName && formik.touched.lastName
                    ? formik.errors.lastName
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="dateOfBirth"
                placeholder=""
                label="Date Of Birth"
                className={classes.textField}
                type="date"
                InputLabelProps={{ shrink: true }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
                error={formik.errors.dateOfBirth && formik.touched.dateOfBirth}
                helperText={
                  formik.errors.dateOfBirth && formik.touched.dateOfBirth
                    ? formik.errors.dateOfBirth
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="contactNumber"
                placeholder=""
                label="Contact Number"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.contactNumber}
                error={
                  formik.errors.contactNumber && formik.touched.contactNumber
                }
                helperText={
                  formik.errors.contactNumber && formik.touched.contactNumber
                    ? formik.errors.contactNumber
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="email"
                placeholder=""
                label="Email"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email && formik.touched.email}
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="alternateContactNumber"
                placeholder=""
                label="Alternate Contact Number"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.alternateContactNumber}
                error={
                  formik.errors.alternateContactNumber &&
                  formik.touched.alternateContactNumber
                }
                helperText={
                  formik.errors.alternateContactNumber &&
                  formik.touched.alternateContactNumber
                    ? formik.errors.alternateContactNumber
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  id="gender"
                  name="gender"
                  label="Gender"
                  className={classes.textField}
                  value={formik.values.gender}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.errors.gender && formik.touched.gender}
                  // helperText={
                  //   formik.errors.gender && formik.touched.gender
                  //     ? formik.errors.gender
                  //     : null
                  // }
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {formik.errors.gender && formik.touched.gender && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.gender}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="github"
                placeholder=""
                label="Git hub"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.github}
                error={formik.errors.github && formik.touched.github}
                helperText={
                  formik.errors.github && formik.touched.github
                    ? formik.errors.github
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="linkedIn"
                placeholder=""
                label="Linked In"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.linkedIn}
                error={formik.errors.linkedIn && formik.touched.linkedIn}
                helperText={
                  formik.errors.linkedIn && formik.touched.linkedIn
                    ? formik.errors.linkedIn
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="bloodGroup"
                placeholder=""
                label="Blood group"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.bloodGroup}
                error={formik.errors.bloodGroup && formik.touched.bloodGroup}
                helperText={
                  formik.errors.bloodGroup && formik.touched.bloodGroup
                    ? formik.errors.bloodGroup
                    : null
                }
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="maritalStatus-label">Marital Status</InputLabel>
                <Select
                  className={classes.textField}
                  label="Marital Status"
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formik.values.maritalStatus}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.maritalStatus && formik.touched.maritalStatus
                  }
                  helperText={
                    formik.errors.maritalStatus && formik.touched.maritalStatus
                      ? formik.errors.maritalStatus
                      : null
                  }
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                  <MenuItem value="widowed">Widowed</MenuItem>
                </Select>
                {formik.errors.maritalStatus &&
                  formik.touched.maritalStatus && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.maritalStatus}
                    </FormHelperText>
                  )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} padding={3}>
            <Grid item xs={12}>
              <Typography variant="h4" marginTop={2}>
                Bank Details
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="bankName"
                placeholder=""
                label="Bank Name"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.bankName}
                error={formik.errors.bankName && formik.touched.bankName}
                helperText={
                  formik.errors.bankName && formik.touched.bankName
                    ? formik.errors.bankName
                    : null
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="accountNumber"
                placeholder=""
                label="Account Number"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.accountNumber}
                error={
                  formik.errors.accountNumber && formik.touched.accountNumber
                }
                helperText={
                  formik.errors.accountNumber && formik.touched.accountNumber
                    ? formik.errors.accountNumber
                    : null
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="ifscCode"
                placeholder=""
                label="IFSC Code"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.ifscCode}
                error={formik.errors.ifscCode && formik.touched.ifscCode}
                helperText={
                  formik.errors.ifscCode && formik.touched.ifscCode
                    ? formik.errors.ifscCode
                    : null
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="branch"
                placeholder=""
                label="Branch"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.branch}
                error={formik.errors.branch && formik.touched.branch}
                helperText={
                  formik.errors.branch && formik.touched.branch
                    ? formik.errors.branch
                    : null
                }
              />
            </Grid>
          </Grid>
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

export default PersonalDetails;
