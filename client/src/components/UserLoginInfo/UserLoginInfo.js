import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const UserLoginInfo = (props) => {
  const proceed = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;

  return (
    // <>
    <Dialog open fullWidth maxWidth="sm">
      <AppBar title="Enter User Details" />
      {/* <TextField
        helperText="Enter Your First Name"
        label="First Name"
        onChange={(e) => handleChange("firstName", e)}
        defaultValue={values.firstName}
        margin="normal"
        fullWidth
      /> */}
      <br />
      {/* <TextField
        helperText="Enter Your Last Name"
        label="Last Name"
        onChange={(e) => handleChange("lastName", e)}
        defaultValue={values.lastName}
        margin="normal"
        fullWidth
      /> */}
      <br />
      <TextField
        required
        id="outlined-required"
        helperText="Enter Your Email"
        label="Email"
        onChange={(e) => handleChange("email", e)}
        defaultValue={values.email}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        id="standard-password-input"
        helperText="Password"
        label="Password"
        onChange={(e) => handleChange("password", e)}
        defaultValue={values.password}
        margin="normal"
        fullWidth
      />
      <br />

      <Button
        label="Submit"
        color="primary"
        variant="contained"
        onClick={this.proceed}
      >
        Submit
      </Button>
    </Dialog>
    // </>
  );
};

export default UserLoginInfo;
