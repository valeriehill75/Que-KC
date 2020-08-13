import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import About from "../components/About/index";
import Container from "../components/Container/index";
import Footer from "../components/Footer/index";

import FormUserDetails from "../components/FormUserDetails";
import FormPersonalDetails from "../components/FormPersonalDetails";
import Confirm from "../components/Confirm";
import Success from "../components/Success";

import UserForm from "../components/UserForm";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="Login">
        <UserForm />
      </div>

      <Footer />
    </>
  );
};

export default Login;
