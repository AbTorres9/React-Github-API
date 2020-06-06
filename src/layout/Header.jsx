import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  return (
    <>
      <Navbar color="info" light expand="md">
        <NavbarBrand>
          <Link to="/" className="text-white">
            <strong>Git Extractor</strong>
          </Link>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
