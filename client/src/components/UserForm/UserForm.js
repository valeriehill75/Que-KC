import React, { Component } from "react";
import UserLoginInfo from "../UserLoginInfo/UserLoginInfo";
import UserSignupInfo from "../SignupPage/UserSignup.js";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle fields change
  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    console.log(this.state);
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const values = { firstName, lastName, email, password, confirmPassword };

    switch (step) {
      case 1:
        return (
          <UserLoginInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            values={values}
          />
        );
      case 2:
        return (
          <UserSignupInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
