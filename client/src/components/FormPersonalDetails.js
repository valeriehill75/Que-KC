import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
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
      <MuiThemeProvider>
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
              hintText="Enter Your City"
              floatingLabelText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Bio"
              floatingLabelText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
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
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
