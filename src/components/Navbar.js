import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "../styles/Navbar.css";

const NavbarComponent = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" className="navbar">
      <Container fluid="md">
        <NavbarBrand className="brand" onClick={() => history.push("/")}>
          To Do List
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="link link-add-event"
                onClick={() => history.push("/add")}
              >
                + Add Event
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="link link-dashboard"
                onClick={() => history.push("/dashboard")}
              >
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
