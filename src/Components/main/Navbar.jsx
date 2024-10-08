import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"} >My Web App</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/countries"}>Country Data</Nav.Link>
            <Nav.Link as={Link} to={"/todoapp"}>Todo App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar

