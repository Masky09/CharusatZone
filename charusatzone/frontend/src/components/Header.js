import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#f8cf40" }}>
        <Navbar.Brand style={{ color: "#041f60" }} href="/">
          CHARUSATzone
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: "#041f60" }} href="/books">
              Books
            </Nav.Link>
            <NavDropdown title="Study Material" id="basic-nav-dropdown">
              <NavDropdown.Item style={{ color: "#0b3c5d" }} href="/notes">
                Notes
              </NavDropdown.Item>
              <NavDropdown.Item style={{ color: "#0b3c5d" }} href="/syllabus">
                Syllabus
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: "#041f60" }} href="/login">
              Login
            </Nav.Link>
            <Nav.Link style={{ color: "#041f60" }} href="/signup">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
