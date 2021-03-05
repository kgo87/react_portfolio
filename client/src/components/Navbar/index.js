import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import "./style.css";

function MyNavbar(){

  return(
    <Navbar bg="light" expand="lg">
    <Container fluid="lg">
   
      <Nav className="mr-auto">

        <Nav.Link className="navItem" href="/">About</Nav.Link>
        <Nav.Link className="navItem" href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link className="navItem" href="/contact">Contact</Nav.Link>
      </Nav>  
   
    </Container>
</Navbar>

  )
};

export default MyNavbar;