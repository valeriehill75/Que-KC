import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { StylesContext } from "@material-ui/styles";

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
    const { values } = this.props;
    this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Hometown"
            floatingLabelText="Hometown"
            onChange={handleChange("hometown")}
            defaultValue={values.hometown}
          />
          <br />
          <TextField
            hintText="Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={StylesContext.button}
            onClick={this.continue}
          />
          <br />
          <BackButton
            label="Back"
            primary={false}
            style={StylesContext.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
