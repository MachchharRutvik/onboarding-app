import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { Paper, Grid, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { documentsValidation } from "../../../validation/ValidationSchema";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Chip } from "@mui/material";

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
  const [selectedImage, setSelectedImage] = useState([]);
  const [selecetedDocument, setSelectedDocument] = useState("");

  const educationCertificates = [
    "10th",
    "12th",
    "Bachelor's degree",
    "Master's degree",
  ];

  const initialValues = {
    educationCertificate: [
      {
        documentName: "",
        document: null,
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
  const handleAddEducationCertificate = () => {
    console.log("handleAddEducationDerio");

    formik.setValues({
      ...formik.values,
      educationCertificate: [
        ...formik.values.educationCertificate,
        {
          document: "",
          documentName: "",
        },
      ],
    });
  };
  const handleRemoveEducationCertificate = (index) => {
    const educationCertificate = [...formik.values.educationCertificate];
    educationCertificate.splice(index, 1);
    formik.setValues({
      ...formik.values,
      educationCertificate,
    });
  };
  const handleImage = (fieldName) => (event) => {
    const files = event.target.files;
    console.log(files);
    const fileList = Array.from(files);
  
    setSelectedImage((prevSelectedImages) => ({
      ...prevSelectedImages,
      [fieldName]: fileList,
    }));
  
    // Set the file data into the Formik object
    formik.setFieldValue(fieldName, fileList);
    console.log(formik.values);
  };
  
  
  console.log("selected Image",selectedImage)
const handleDelete = (index, fieldName) => {
  setSelectedImage((prevSelectedImage) => {
    const images = prevSelectedImage[fieldName] || []; // Check if the array exists or initialize it as an empty array
    const updatedImages = images.filter((_, i) => i !== index);

    return {
      ...prevSelectedImage,
      [fieldName]: updatedImages,
    };
  });
};

  
  
  
  
  const handleEducationDocument = (index) => (event) => {
    console.log(event.target.value);
    setSelectedDocument(event.target.value);
    const updatedCertificate = {
      ...formik.values.educationCertificate[index],
      documentName: event.target.value,
    };

    const updatedCertificates = [...formik.values.educationCertificate];
    updatedCertificates[index] = updatedCertificate;

    formik.setValues({
      ...formik.values,
      educationCertificate: updatedCertificates,
    });
  };
  const handleEducationDocuments = (index) => (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const file = files[0];

      const updatedCertificates = [...formik.values.educationCertificate];
      updatedCertificates[index] = {
        ...updatedCertificates[index],
        document: file,
      };

      formik.setValues({
        ...formik.values,
        educationCertificate: updatedCertificates,
      });
      console.log(formik.values);
    }
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
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={4}>
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
                error={formik.errors.adharNumber && formik.touched.adharNumber}
                helperText={
                  formik.errors.adharNumber && formik.touched.adharNumber
                    ? formik.errors.adharNumber
                    : null
                }
              />
            </Grid>
            <Grid item xs={2}>
              <div>
                {/* <label htmlFor="adharDocument">Adhaar Document</label> */}
                <label htmlFor="adharDocument">
                  <Button
                    component="span"
                    size="small"
                    variant="contained"
                    sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                  >
                    Upload Adhaar
                  </Button>
                  <TextField
                    id="adharDocument"
                    name="adharDocument"
                    type="file"
                    inputProps={{
                      multiple: true,
                    }}
                    onChange={handleImage("adharDocument")}
                    multiple
                    style={{ display: "none" }}
                  />
                </label>
                {formik.errors.adharDocument &&
                  formik.touched.adharDocument && (
                    <div>{formik.errors.adharDocument}</div>
                  )}
              </div>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="panCardNumber"
                placeholder=""
                label="Pancard Number"
                className={classes.textField}
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.panCardNumber}
                error={
                  formik.errors.panCardNumber && formik.touched.panCardNumber
                }
                helperText={
                  formik.errors.panCardNumber && formik.touched.panCardNumber
                    ? formik.errors.panCardNumber
                    : null
                }
              />
            </Grid>
            <Grid item xs={2}>
              <div>
                {/* <label htmlFor="adharDocument">Adhaar Document</label> */}
                <label htmlFor="panCardDocument">
                  <Button
                    component="span"
                    size="small"
                    variant="contained"
                    sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                  >
                    Upload Pancard
                  </Button>
                  <TextField
                    id="panCardDocument"
                    name="panCardDocument"
                    type="file"
                    inputProps={{
                      multiple: true,
                    }}
                    onChange={handleImage("panCardDocument")}
                    multiple
                    style={{ display: "none" }}
                  />
                </label>
                {formik.errors.panCardDocument &&
                  formik.touched.panCardDocument && (
                    <div>{formik.errors.panCardDocument}</div>
                  )}
              </div>
            </Grid>
            <Grid item xs={6}>
              {selectedImage &&
                selectedImage.adharDocument &&
                selectedImage.adharDocument.map((image, index) => (
                  <Chip
                    sx={{ marginLeft: "10px", backgroundColor: "#FF9933" }}
                    key={index}
                    label={image.name}
                    onDelete={() => handleDelete(index, "adharDocument")}
                  />
                ))}
            </Grid>
            <Grid item xs={6}>
              {selectedImage &&
                selectedImage.panCardDocument &&
                selectedImage.panCardDocument.map((image, index) => (
                  <Chip
                    sx={{ marginLeft: "10px", backgroundColor: "#FF9933" }}
                    key={index}
                    label={image.name}
                    onDelete={() => handleDelete(index, "panCardDocument")}
                  />
                ))}
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
                      name="checkBox"
                      onChange={formik.handleChange}
                      value={formik.values.checkBox}
                    />
                  }
                  label="Mark Checkbox if the both adddress are same"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="presentAddress"
                placeholder=""
                label="Present Address"
                className={classes.textField}
                type="text"
                multiline
                rows={4}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.presentAddress}
                error={
                  formik.errors.presentAddress && formik.touched.presentAddress
                }
                helperText={
                  formik.errors.presentAddress && formik.touched.presentAddress
                    ? formik.errors.presentAddress
                    : null
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="permanentAddress"
                placeholder=""
                label="Permanent Address"
                className={classes.textField}
                type="text"
                multiline
                rows={4}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.permanentAddress}
                error={
                  formik.errors.permanentAddress &&
                  formik.touched.permanentAddress
                }
                helperText={
                  formik.errors.permanentAddress &&
                  formik.touched.permanentAddress
                    ? formik.errors.permanentAddress
                    : null
                }
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4" marginLeft={"20px"}>
              Experience Details
            </Typography>
            <Button
              size="small"
              variant="contained"
              sx={{ margin: "10px", backgroundColor: "#FF9933" }}
              onClick={handleAddEducationCertificate}
            >
              Add Experience
            </Button>
          </Box>
          <Grid container spacing={2} padding={3}>
            {formik.values.educationCertificate &&
              formik.values.educationCertificate.map((certificate, index) => (
                <>
                 
                  <Grid item xs={4} key={index}>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="demo-simple-select-label">
                        Education Certificates
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="documentName"
                        value={
                          formik.values.educationCertificate[index].documentName
                        }
                        label="Education Certificates"
                        name={`educationCertificate[${index}].documentName`}
                        onChange={handleEducationDocument(index)}
                        onBlur={formik.handleBlur}
                        error={
                          formik.errors.educationCertificate &&
                          formik.errors.educationCertificate[index] &&
                          formik.errors.educationCertificate[index]
                            .documentName &&
                          formik.touched.educationCertificate &&
                          formik.touched.educationCertificate[index] &&
                          formik.touched.educationCertificate[index]
                            .documentName
                        }
                      >
                        {educationCertificates.map((type, index) => (
                          <MenuItem key={index} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.errors.educationCertificate &&
                        formik.errors.educationCertificate[index] &&
                        formik.errors.educationCertificate[index]
                          .documentName &&
                        formik.touched.educationCertificate &&
                        formik.touched.educationCertificate[index] &&
                        formik.touched.educationCertificate[index]
                          .documentName && (
                          <FormHelperText style={{ color: "red" }}>
                            {
                              formik.errors.educationCertificate[index]
                                .documentName
                            }
                          </FormHelperText>
                        )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={1}>
                    <div>
                      {/* <label htmlFor="adharDocument">Adhaar Document</label> */}
                      <TextField
                        id={selecetedDocument}
                        name={selecetedDocument}
                        type="file"
                        inputProps={{
                          multiple: true,
                        }}
                        // value={
                        //   formik.values.educationCertificate[index].document
                        // }
                        onChange={handleEducationDocuments(index)}
                        // onChange={()=>handleEducationDocuments(index)}
                        onBlur={formik.handleBlur}
                        style={{ display: "none" }}
                      />
                      <label htmlFor={selecetedDocument}>
                        <Button
                          component="span"
                          size="small"
                          variant="contained"
                          sx={{ backgroundColor: "#FF9933" }}
                        >
                          Upload
                        </Button>
                      </label>
                      {/* {formik.errors.panCardDocument &&
                        formik.touched.panCardDocument && (
                          <div>{formik.errors.panCardDocument}</div>
                        )} */}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {formik.values.educationCertificate &&
                      formik.values.educationCertificate.map(
                        (item, index) =>
                          item.document &&
                         
                            <Chip
                              sx={{
                                marginLeft: "10px",
                                backgroundColor: "#FF9933",
                              }}
                              key={index}
                              label={item.document.name}
                              onDelete={() =>
                                handleDelete(index, selecetedDocument)
                              }
                            />
                          
                      )}
                  </Grid>
                  <Grid item xs={1}>
                    {index > 0 && (
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#FF9933" }}
                        size="small"
                        type="button"
                        onClick={() => handleRemoveEducationCertificate(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Grid>
                </>
              ))}
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
