import React from "react";
// import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Link to={`/`}> <Nav.Link href="#home">Home</Nav.Link></Link >
              <Link to={`/Showbugs`}><Nav.Link href="#link">Bug List</Nav.Link></Link >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
