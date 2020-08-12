import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Comfirm";
import Success from "./Success";
import UserForm from "../components/UserForm";
import e from "express";

return (
  <>
    <Navbar />
    <Container>
      <UserForm />
    </Container>
    <About />
    <Footer />
  </>
);

export default Login;
