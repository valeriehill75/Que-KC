import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import About from "../components/About/index";
import Container from "../components/Container/index";
import Footer from "../components/Footer/index";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Comfirm";
import Success from "./Success";
import UserForm from "../components/UserForm";
import e from "express";

export default function Signup() {
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
}
