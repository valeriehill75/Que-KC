import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { StylesContext } from "@material-ui/styles";
import Confirm from "./Comfirm";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, bio },
    } = this.props;
    this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First name" secondaryText={firstName} />
          </List>
          <List>
            <ListItem primaryText="Last name" secondaryText={LastName} />
          </List>
          <List>
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <List>
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>

          <br />
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
