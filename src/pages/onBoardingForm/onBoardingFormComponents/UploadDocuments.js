import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";
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

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Chip } from "@mui/material";
import { styled } from "@mui/material";
import { UploadDocumentsSchema } from "../../../validation/UploadDocumentsSchema";

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
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  flexGrow: 1,
}));

function UploadDocuments({
  handleNext,
  handleBack,
  steps,
  activeStep,
  setDocumentsData,
  documentsData,
}) {
  const classes = useStyles();
  useEffect(() => {
    setAllTheData();
  }, []);

  const fileRef = {
   adharFront: useRef(null),
   adharBack: useRef(null),
   panCardDocument: useRef(null),
   latestExperienceLetter: useRef(null),
   latestRelievingLetter: useRef(null),
   salarySlips: useRef(null),
   form16: useRef(null),
  }

  const educationCertificates = [
    "10th",
    "12th",
    "Bachelor's degree",
    "Master's degree",
  ];

  const initialValues = {
    educationCertificate: [
      {
        id: uuid(),
        documentName: "",
        document: null,
      },
    ],
    adharNumber: "",
    adharFront: "",
    adharBack: "",
    panCardNumber: "",
    panCardDocument: "",
    streetLine1: "",
    streetLine2: "",
    state: "",
    country: "",
    area: "",
    city: "",
    postalCode: "",
    perStreetLine1: "",
    perStreetLine2: "",
    perState: "",
    perCountry: "",
    perArea: "",
    perCity: "",
    perPostalCode: "",
    addressSame: true,
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
          id: uuid(),
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

  const handleDelete = (fieldName) => {
    formik.setFieldValue(fieldName, "");
  };

  const handleEducationDocumentName = (event, userId) => {
    // console.log("EUC_ID", userId);
    // console.log(event.target.value);
    formik.handleChange(event);
    const updatedCertificate = formik.values.educationCertificate.map((ele) => {
      if (ele.id === userId) {
        return { ...ele, documentName: event.target.value };
      } else {
        return ele;
      }
    });
    formik.setValues({
      ...formik.values,
      educationCertificate: updatedCertificate,
    });
  };

  const countryAddress = {
    country: {
      name: "India",
      states: [
        {
          name: "Maharashtra",
          cities: [
            {
              name: "Mumbai",
              areas: [
                {
                  name: "Andheri East",
                  postalCodes: ["400069", "400099"],
                },
                {
                  name: "Bandra West",
                  postalCodes: ["400050", "400051"],
                },
              ],
            },
            {
              name: "Pune",
              areas: [
                {
                  name: "Koregaon Park",
                  postalCodes: ["411001", "411036"],
                },
                {
                  name: "Baner",
                  postalCodes: ["411045", "411007"],
                },
              ],
            },
          ],
        },
        {
          name: "Karnataka",
          cities: [
            {
              name: "Bengaluru",
              areas: [
                {
                  name: "Indiranagar",
                  postalCodes: ["560008", "560038"],
                },
                {
                  name: "Koramangala",
                  postalCodes: ["560034", "560095"],
                },
              ],
            },
            {
              name: "Mysuru",
              areas: [
                {
                  name: "Vijaynagar",
                  postalCodes: ["570017", "570021"],
                },
                {
                  name: "Saraswathipuram",
                  postalCodes: ["570009", "570015"],
                },
              ],
            },
          ],
        },
        {
          name: "Tamil Nadu",
          cities: [
            {
              name: "Chennai",
              areas: [
                {
                  name: "Adyar",
                  postalCodes: ["600020", "600026"],
                },
                {
                  name: "T Nagar",
                  postalCodes: ["600017", "600018"],
                },
              ],
            },
            {
              name: "Coimbatore",
              areas: [
                {
                  name: "RS Puram",
                  postalCodes: ["641002", "641003"],
                },
                {
                  name: "Saibaba Colony",
                  postalCodes: ["641011", "641012"],
                },
              ],
            },
          ],
        },
        {
          name: "Uttar Pradesh",
          cities: [
            {
              name: "Lucknow",
              areas: [
                {
                  name: "Gomti Nagar",
                  postalCodes: ["226010", "226016"],
                },
                {
                  name: "Aliganj",
                  postalCodes: ["226024", "226025"],
                },
              ],
            },
            {
              name: "Agra",
              areas: [
                {
                  name: "Sikandra",
                  postalCodes: ["282007", "282008"],
                },
                {
                  name: "Kamla Nagar",
                  postalCodes: ["282004", "282005"],
                },
              ],
            },
          ],
        },
        {
          name: "Gujarat",
          cities: [
            {
              name: "Ahmedabad",
              areas: [
                {
                  name: "Navrangpura",
                  postalCodes: ["380009", "380014"],
                },
                {
                  name: "Bodakdev",
                  postalCodes: ["380054", "380059"],
                },
              ],
            },
            {
              name: "Surat",
              areas: [
                {
                  name: "Adajan",
                  postalCodes: ["395009", "395007"],
                },
                {
                  name: "Vesu",
                  postalCodes: ["395006", "395002"],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const handleChangeCheckbox = (event) => {
    formik.setFieldValue("addressSame", event.target.checked);
    if (event.target.checked) {
      formik.setFieldValue("perStreetLine1", formik.values.streetLine1);
      formik.setFieldValue("perStreetLine2", formik.values.streetLine2);
      formik.setFieldValue("perState", formik.values.state);
      formik.setFieldValue("perCountry", formik.values.country);
      formik.setFieldValue("perArea", formik.values.area);
      formik.setFieldValue("perCity", formik.values.city);
      formik.setFieldValue("perPostalCode", formik.values.postalCode);
    } else {
      formik.setFieldValue("perStreetLine1", "");
      formik.setFieldValue("perStreetLine2", "");
      formik.setFieldValue("perState", "");
      formik.setFieldValue("perCountry", "");
      formik.setFieldValue("perArea", "");
      formik.setFieldValue("perCity", "");
      formik.setFieldValue("perPostalCode", "");
    }
  };
  const handleChangeAddress = (e) => {
    formik.handleChange(e);
    if (formik.values.addressSame) {
      const name =
        e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
      console.log("Name", name);
      formik.setFieldValue("per" + name, e.target.value);
    }
  };
  const handleEducationDocuments = (event, userId) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      let educationArray = formik.values.educationCertificate.map(
        (ele, index) => {
          if (ele.id === userId) {
            return { ...ele, document: file };
          } else {
            return ele;
          }
        }
      );
      formik.setValues({
        ...formik.values,
        educationCertificate: educationArray,
      });
    }
  };
  const handleEducationDocumentDelete = (id) => {
    let educationArray = formik.values.educationCertificate.map((ele) => {
      if (ele.id === id) {
        return { ...ele, document: "" };
      } else {
        return ele;
      }
    });
    formik.setValues({
      ...formik.values,
      educationCertificate: educationArray,
    });
  };
  const onSubmit = (values) => {
    console.log(formik.values);
    setDocumentsData(values);
    handleNext();
  };
  const handleBackButton = () => {
    setDocumentsData(formik.values);
    handleBack();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: UploadDocumentsSchema,
  });

  const setAllTheData = () => {
    if (documentsData !== null) {
      formik.setFieldValue("adharNumber", documentsData.adharNumber);
      formik.setFieldValue("panNumber", documentsData.panNumber);
      formik.setFieldValue("adharFront", documentsData.adharFront);
      formik.setFieldValue("adharBack", documentsData.adharBack);
      formik.setFieldValue("panCardDocument", documentsData.panCardDocument);
      formik.setFieldValue("streetLine1", documentsData.streetLine1);
      formik.setFieldValue("streetLine2", documentsData.streetLine2);
      formik.setFieldValue("state", documentsData.state);
      formik.setFieldValue("country", documentsData.country);
      formik.setFieldValue("area", documentsData.area);
      formik.setFieldValue("city", documentsData.city);
      formik.setFieldValue("postalCode", documentsData.postalCode);
      formik.setFieldValue("perStreetLine1", documentsData.perStreetLine1);
      formik.setFieldValue("perStreetLine2", documentsData.perStreetLine2);
      formik.setFieldValue("perState", documentsData.perState);
      formik.setFieldValue("perCountry", documentsData.perCountry);
      formik.setFieldValue("perArea", documentsData.perArea);
      formik.setFieldValue("perCity", documentsData.perCity);
      formik.setFieldValue("perPostalCode", documentsData.perPostalCode);
      formik.setFieldValue("addressSame", documentsData.addressSame);
      formik.setFieldValue(
        "latestExperienceLetter",
        documentsData.latestExperienceLetter
      );
      formik.setFieldValue(
        "latestRelievingLetter",
        documentsData.latestRelievingLetter
      );
      formik.setFieldValue("salarySlips", documentsData.salarySlips);
      formik.setFieldValue("form16", documentsData.form16);
      formik.setFieldValue(
        "educationCertificate",
        documentsData.educationCertificate
      );
    }
  };
  const handleImage = (fieldName, event) => {
    const files = event.target.files[0];
    formik.setFieldValue(fieldName, files);
  };
  console.log("Values",formik.values)

  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "50px" }}>
        <Typography variant="h4" marginLeft={"20px"}>
          Documents
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
                <Button
                  component="span"
                  size="small"
                  variant="contained"
                  sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                  onBlur={formik.handleBlur}
                  onClick={() => {
                    fileRef.adharFront.current.click();
                  }}
                  id="adharFront"
                  name="adharFront"
                  error={formik.errors.adharFront && formik.touched.adharFront}
                >
                  Upload Adhaar Front
                </Button>
                <input
                  ref={fileRef.adharFront}
                  type="file"
                  onChange={(e) => handleImage("adharFront", e)}
                  hidden
                />
                {formik.errors.adharFront && formik.touched.adharFront && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.adharFront}
                  </FormHelperText>
                )}
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <Button
                  component="span"
                  size="small"
                  variant="contained"
                  sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                  onClick={() => {
                    fileRef.adharBack.current.click();
                  }}
                  id="adharBack"
                  onBlur={formik.handleBlur}
                >
                  Upload Adhaar Back
                  <input
                    hidden
                    ref={fileRef.adharBack}
                    type="file"
                    onChange={(e) => handleImage("adharBack", e)}
                  />
                </Button>
                {formik.errors.adharBack && formik.touched.adharBack && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.adharBack}
                  </FormHelperText>
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              {formik.values.adharFront && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.adharFront.name}
                  variant="outlined"
                  onDelete={() => handleDelete("adharFront")}
                />
              )}
              {formik.values.adharBack && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.adharBack.name}
                  variant="outlined"
                  onDelete={() => handleDelete("adharBack")}
                />
              )}
            </Grid>
            <Grid item xs={6}>
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
                    id="panCardDocument"
                    name="panCardDocument"
                    onClick={() => {
                      fileRef.panCardDocument.current.click();
                    }}
                    onBlur={formik.handleBlur}
                  >
                    Upload Pancard
                  </Button>
                  <input
                    type="file"
                    ref={fileRef.panCardDocument}
                    onChange={(e) => handleImage("panCardDocument", e)}
                    style={{ display: "none" }}
                  />
                </label>
                {formik.errors.panCardDocument &&
                  formik.touched.panCardDocument && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.panCardDocument}
                    </FormHelperText>
                  )}
              </div>
            </Grid>
            <Grid item xs={12}>
              {formik.values.panCardDocument && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.panCardDocument.name}
                  variant="outlined"
                  onDelete={() => handleDelete("panCardDocument")}
                />
              )}
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px" }}
          >
            <Typography variant="h4">Present Address</Typography>
          </Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={4}>
              <Item>
                <TextField
                  className={classes.textField}
                  // id="Aa"
                  type="text"
                  name="streetLine1"
                  label="Street Line 1"
                  variant="outlined"
                  error={
                    formik.errors.streetLine1 && formik.touched.streetLine1
                  }
                  onChange={(e) => handleChangeAddress(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.streetLine1}
                  helperText={
                    formik.errors.streetLine1 && formik.touched.streetLine1
                      ? formik.errors.streetLine1
                      : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TextField
                  className={classes.textField}
                  type="text"
                  name="streetLine2"
                  label="Street Line 2"
                  variant="outlined"
                  onChange={(e) => handleChangeAddress(e)}
                  error={
                    formik.errors.streetLine2 && formik.touched.streetLine2
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.streetLine2}
                  helperText={
                    formik.errors.streetLine2 && formik.touched.streetLine2
                      ? formik.errors.streetLine2
                      : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="country">Country</InputLabel>
                  <Select
                    labelId="country"
                    name="country"
                    // onBlur={formik.handleBlur}
                    label="Country"
                    value={formik.values.country}
                    onChange={(e) => handleChangeAddress(e)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.country && formik.touched.country}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                  {formik.errors.country && formik.touched.country && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.country}
                    </FormHelperText>
                  )}
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="state">State</InputLabel>
                  <Select
                    labelId="state"
                    name="state"
                    // onBlur={formik.handleBlur}
                    label="State"
                    value={formik.values.state}
                    onChange={(e) => handleChangeAddress(e)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.state && formik.touched.state}
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                  {formik.errors.state && formik.touched.state && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.state}
                    </FormHelperText>
                  )}
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="city">City</InputLabel>
                  <Select
                    labelId="city"
                    name="city"
                    onBlur={formik.handleBlur}
                    label="City"
                    value={formik.values.city}
                    onChange={(e) => handleChangeAddress(e)}
                    error={formik.errors.city && formik.touched.city}
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.city && formik.touched.city && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.city}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="area">Area</InputLabel>
                  <Select
                    labelId="area"
                    name="area"
                    onBlur={formik.handleBlur}
                    label="Area"
                    value={formik.values.area}
                    onChange={(e) => handleChangeAddress(e)}
                    error={formik.errors.area && formik.touched.area}
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.area && formik.touched.area && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.area}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="postalCode">Postal Code</InputLabel>
                  <Select
                    labelId="postalCode"
                    name="postalCode"
                    onBlur={formik.handleBlur}
                    label="postalCode"
                    value={formik.values.postalCode}
                    onChange={(e) => handleChangeAddress(e)}
                    error={
                      formik.errors.postalCode && formik.touched.postalCode
                    }
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.find((area) => area.name === formik.values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.postalCode && formik.touched.postalCode && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.postalCode}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px" }}
          >
            <Typography variant="h4">Permanent Address</Typography>
            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="checkbox"
                    control={
                      <Checkbox
                        checked={formik.values.addressSame}
                        onChange={handleChangeCheckbox}
                        sx={{
                          color: "#FF9933",
                          "&.Mui-checked": {
                            color: "#FF9933",
                          },
                        }}
                      />
                    }
                    label="Same as Present Address"
                    name="addressSame"
                    sx={{ marginTop: "10px", width: "100%" }}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Box>

          <Grid container spacing={2} padding={2}>
            <Grid item xs={4}>
              <Item>
                <TextField
                  className={classes.textField}
                  id="perStreetLine1"
                  type="text"
                  name="perStreetLine1"
                  label="Street Line 1"
                  variant="outlined"
                  disabled={formik.values.addressSame}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.perStreetLine1 &&
                    formik.touched.perStreetLine1
                  }
                  value={formik.values.perStreetLine1}
                  helperText={
                    formik.errors.perStreetLine1 &&
                    formik.touched.perStreetLine1
                      ? formik.errors.perStreetLine1
                      : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TextField
                  className={classes.textField}
                  type="text"
                  name="perStreetLine2"
                  label="Street Line 2"
                  variant="outlined"
                  disabled={formik.values.addressSame}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.perStreetLine2 &&
                    formik.touched.perStreetLine2
                  }
                  value={formik.values.perStreetLine2}
                  helperText={
                    formik.errors.perStreetLine2 &&
                    formik.touched.perStreetLine2
                      ? formik.errors.perStreetLine2
                      : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perCountry">Country</InputLabel>
                  <Select
                    labelId="perCountry"
                    name="perCountry"
                    onBlur={formik.handleBlur}
                    disabled={formik.values.addressSame}
                    label="perCountry"
                    value={formik.values.perCountry}
                    onChange={(event) =>
                      formik.setFieldValue("perCountry", event.target.value)
                    }
                    error={
                      formik.errors.perCountry && formik.touched.perCountry
                    }
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                </FormControl>
                {formik.errors.perCountry && formik.touched.perCountry && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.perCountry}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perState">State</InputLabel>
                  <Select
                    labelId="perState"
                    name="perState"
                    onBlur={formik.handleBlur}
                    disabled={formik.values.addressSame}
                    label="State"
                    value={formik.values.perState}
                    onChange={(event) =>
                      formik.setFieldValue("perState", event.target.value)
                    }
                    error={formik.errors.perState && formik.touched.perState}
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                {formik.errors.perState && formik.touched.perState && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.perState}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perCity">City</InputLabel>
                  <Select
                    labelId="perCity"
                    name="perCity"
                    onBlur={formik.handleBlur}
                    error={formik.errors.perCity && formik.touched.perCity}
                    label="City"
                    disabled={formik.values.addressSame}
                    value={formik.values.perCity}
                    onChange={(event) =>
                      formik.setFieldValue("perCity", event.target.value)
                    }
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perCity && formik.touched.perCity && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.perCity}
                  </FormHelperText>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perArea">Area</InputLabel>
                  <Select
                    labelId="perArea"
                    name="perArea"
                    onBlur={formik.handleBlur}
                    error={formik.errors.perArea && formik.touched.perArea}
                    disabled={formik.values.addressSame}
                    label="Area"
                    value={formik.values.perArea}
                    onChange={(event) =>
                      formik.setFieldValue("perArea", event.target.value)
                    }
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perArea && formik.touched.perArea && (
                  <FormHelperText style={{ color: "red" }}>
                    {formik.errors.perArea}
                  </FormHelperText>
                )}{" "}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perPostalCode">Postal Code</InputLabel>
                  <Select
                    labelId="perPostalCode"
                    name="perPostalCode"
                    onBlur={formik.handleBlur}
                    disabled={formik.values.addressSame}
                    error={
                      formik.errors.perPostalCode &&
                      formik.touched.perPostalCode
                    }
                    label="perPostalCode"
                    value={formik.values.perPostalCode}
                    onChange={(event) =>
                      formik.setFieldValue("perPostalCode", event.target.value)
                    }
                    sx={{ width: "100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.find((area) => area.name === formik.values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perPostalCode &&
                  formik.touched.perPostalCode && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.perPostalCode}
                    </FormHelperText>
                  )}
              </Item>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4" marginLeft={"20px"}>
              Education Certificates
            </Typography>
            <Button
              size="small"
              variant="contained"
              sx={{ margin: "10px", backgroundColor: "#FF9933" }}
              onClick={handleAddEducationCertificate}
            >
              Add Education Certificates
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
                        onChange={(e) =>
                          handleEducationDocumentName(e, certificate.id)
                        }
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
                      <input
                        ref={fileRef}
                        type="file"
                        onChange={(e) =>
                          handleEducationDocuments(e, certificate.id)
                        }
                        hidden
                        disabled={!certificate.documentName}
                      />

                      <Button
                        id="document"
                        name={`educationCertificate[${index}].document`}
                        onBlur={formik.handleBlur}
                        component="span"
                        size="small"
                        variant="contained"
                        sx={{ backgroundColor: "#FF9933" }}
                        onClick={() => {
                          fileRef.current.click();
                        }}
                      >
                        Upload
                      </Button>
                      {formik.errors.educationCertificate &&
                        formik.errors.educationCertificate[index] &&
                        formik.errors.educationCertificate[index].document &&
                        formik.touched.educationCertificate &&
                        formik.touched.educationCertificate[index] &&
                        formik.touched.educationCertificate[index].document && (
                          <FormHelperText style={{ color: "red" }}>
                            {formik.errors.educationCertificate[index].document}
                          </FormHelperText>
                        )}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {certificate?.document && (
                      <Chip
                        sx={{
                          marginLeft: "10px",
                          backgroundColor: "#FF9933",
                        }}
                        key={index}
                        label={certificate?.document?.name}
                        onDelete={() =>
                          handleEducationDocumentDelete(certificate.id)
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
            <Grid item xs={6}>
              <div>
                {/* <label htmlFor="adharDocument">Adhaar Document</label> */}

                <Button
                  component="span"
                  size="small"
                  variant="contained"
                  sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                  id="latestExperienceLetter"
                  name="latestExperienceLetter"
                  onBlur={formik.handleBlur}
                  onClick={() => fileRef.latestExperienceLetter.current.click()}
                >
                  Upload Latest Experience Letter
                </Button>
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleImage("latestExperienceLetter", e)}
                  ref={fileRef.latestExperienceLetter}
                />

                {formik.errors.latestExperienceLetter &&
                  formik.touched.latestExperienceLetter && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.latestExperienceLetter}
                    </FormHelperText>
                  )}
              </div>
            </Grid>
            <Grid item xs={6}>
              {formik.values.latestExperienceLetter && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.latestExperienceLetter.name}
                  variant="outlined"
                  onDelete={() => handleDelete("latestExperienceLetter")}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <div>
                {/* <label htmlFor="adharDocument">Adhaar Document</label> */}
              
                  <Button
                    component="span"
                    size="small"
                    variant="contained"
                    sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                    id="latestRelievingLetter"
                    name="latestRelievingLetter"
                    onBlur={formik.handleBlur}
                    onClick={() => fileRef.latestRelievingLetter.current.click()}
                  >
                    Upload Latest Relieving Letter
                  </Button>
                  <input
                  hidden
                    type="file"
                   ref={fileRef.latestRelievingLetter}
                    onChange={(e) => handleImage("latestRelievingLetter", e)}
               
                  />
               
               {formik.errors.latestRelievingLetter &&
                  formik.touched.latestRelievingLetter && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.latestRelievingLetter}
                    </FormHelperText>
                  )}
              </div>
            </Grid>
            <Grid item xs={6}>
              {formik.values.latestRelievingLetter && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.latestRelievingLetter.name}
                  variant="outlined"
                  onDelete={() => handleDelete("latestRelievingLetter")}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <div>
              
                  <Button
                    component="span"
                    size="small"
                    variant="contained"
                    sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                    id="salarySlips"
                    name="salarySlips"
                    onClick={()=>fileRef.salarySlips.current.click()}
                    onBlur={formik.handleBlur}
                  >
                    Upload Salary slip
                  </Button>
                  <input
                    
                    type="file"
                    ref={fileRef.salarySlips}
                    hidden
                    onChange={(e) => handleImage("salarySlips", e)}
                  
                  />
             
             {formik.errors.salarySlips &&
                  formik.touched.salarySlips && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.salarySlips}
                    </FormHelperText>
                  )}
              </div>
            </Grid>
            <Grid item xs={6}>
              {formik.values.salarySlips && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.salarySlips.name}
                  variant="outlined"
                  onDelete={() => handleDelete("salarySlips")}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <div>
             
                  <Button
                    component="span"
                    size="small"
                    variant="contained"
                    sx={{ margin: "10px", backgroundColor: "#FF9933" }}
                    id="form16"
                    name="form16"
                    onClick={()=>fileRef.form16.current.click()}
                    onBlur={formik.handleBlur}
                  >
                    Upload Form 16
                  </Button>
                  <input
                    
                    type="file"
                  hidden
                  ref={fileRef.form16}
                    onChange={(e) => handleImage("form16", e)}
                 
                  />
            
            {formik.errors.form16 &&
                  formik.touched.form16 && (
                    <FormHelperText style={{ color: "red" }}>
                      {formik.errors.form16}
                    </FormHelperText>
                  )}
              </div>
            </Grid>
            <Grid item xs={6}>
              {formik.values.form16 && (
                <Chip
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "#FF9933",
                  }}
                  label={formik.values.form16.name}
                  variant="outlined"
                  onDelete={() => handleDelete("form16")}
                />
              )}
            </Grid>
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
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Paper>
    </>
  );

}

export default UploadDocuments;
