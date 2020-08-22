import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class UserSignupInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter Personal Details" />

          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            id="standard-password-input"
            helperText="Password"
            label="Password"
            onChange={(e) => handleChange("confirmPassword", e)}
            defaultValue={values.Password}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            id="standard-password-input"
            helperText="Confirm Password"
            label="Confirm Password"
            onChange={(e) => handleChange("confirmPassword", e)}
            defaultValue={values.confirmPassword}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            label="Continue"
            color="primary"
            variant="contained"
            onClick={this.continue}
          />
          <br />
          <Button
            label="Back"
            variant="contained"
            color="secondary"
            onClick={this.back}
          />
        </Dialog>
      </>
    );
  }
}

export default UserSignupInfo;
