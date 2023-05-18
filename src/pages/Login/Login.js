import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const Navigate = useNavigate();
  const handleSubmit = () => {
    console.log(formik.isValid)
    if(formik.isValid){
      
      Navigate("/form");
    }
  }
  const formik = useFormik({
    initialValues: {
      password:''
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (values) => {
      if(formik.isValid){
        console.log(values);
      }
    }
  })
 
  console.log(formik.errors);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Paper sx={{ width: "784px", height: "704px" }} elevation={5}>
        <Box
          sx={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
        >
          <img
            src={require("../../assets/logo.png")}
            alt="LOGO"
            width="452px"
            height="105px"
          />
        </Box>
        <Box
          marginLeft={"20px"}
          padding={"20px"}
          sx={{ display: "flex", flexDirection: "column" }}
          gap={"40px"}
        >
          <Typography variant="h4" marginTop={"20px"}>
            New Employee Onboarding
          </Typography>
          <Typography marginTop={"20px"} variant="body1" width={"659px"}>
            Hello! We're looking forward to welcoming you at Cybercom Creation.
            Please assist us in gathering the necessary information and
            documents from you.If you have any questions, feel free to email
            hr@cybercom.co.in. Please enter the password to proceed further.
            Thank you.
          </Typography>
          <form onSubmit={formik.handleSubmit}>
          <TextField
              fullWidth
              name="password"
              placeholder=""
              label="Password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password && formik.touched.password}
              helperText={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null
              }
            />
         
          </form>
          <Divider />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "245px",
              height: "42px",
              marginLeft: "auto",
              marginRight: "auto",
              background: "#FF9933",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
