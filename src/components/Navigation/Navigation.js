import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/BootStrap-Spacer.min.css";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="http://codehub.pro">Home</Nav.Link>
          <Nav.Link href="http://codehub.pro/courses">Courses</Nav.Link>
          <Nav.Link href="http://codehub.pro/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="http://codehub.pro/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;