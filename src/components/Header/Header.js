import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { handleOIDCLogout } from '../../helper/login';
import './Header.css';

export const Header = () => {
  return (
    <Navbar role="navigation">
      <Navbar.Brand as={Link} to="/">Semesterplaner</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/myplans">Meine Pläne</Nav.Link>
        <Nav.Link as={Link} to="/planner">Planer</Nav.Link>
      </Nav>

      <Button variant="secondary" onClick={handleOIDCLogout}>
        Logout
      </Button>
    </Navbar>
  );
};
