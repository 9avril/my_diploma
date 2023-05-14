import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar
      bg="transparent"
      variant="dark"
      expand="lg"
      className="bootstrap-navbar"
    >
      <BootstrapNavbar.Brand as={NavLink} to="/" className="nav-left">
        SZN Visualization
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/routers" activeClassName="active">
            Routers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/obstacles" activeClassName="active">
            Obstacles
          </Nav.Link>
          <NavDropdown title="Charts" id="basic-nav-dropdown">
            <NavDropdown.Item
              as={NavLink}
              to="/charts/first-floor"
              activeClassName="active"
              className="nav-dropdown-item" // добавлено здесь
            >
              First Floor
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/charts/second-floor"
              activeClassName="active"
              className="nav-dropdown-item" // добавлено здесь
            >
              Second Floor
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/charts/third-floor"
              activeClassName="active"
              className="nav-dropdown-item" // добавлено здесь
            >
              Third Floor
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/charts/fourth-floor"
              activeClassName="active"
              className="nav-dropdown-item" // добавлено здесь
            >
              Fourth Floor
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
