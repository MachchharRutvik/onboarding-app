import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: "#ff9933",
    },
    content: {
      textAlign: 'center',
      color: "white",
    },
  }));
const Success = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
    <div className={classes.content}>
      <Typography variant="h4" component="h1" gutterBottom>
        Success!
      </Typography>
      <Typography variant="body1">
        You have successfully submitted all the details.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 3 }}>
        GO TO HOME
      </Button>
    </div>
  </div>
  );
};

export default Success;
