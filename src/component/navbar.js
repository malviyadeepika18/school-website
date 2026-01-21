import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Enquireform from "../component/enquireform";
import imglogo from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";

const NavbarComp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academic" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      expand="md"
      light
      fixed="top"
      className="px-5 bg-white shadow-sm"
      style={{ height: "70px" }}
    >
      {/* Logo */}
      <NavbarBrand tag={NavLink} to="/" className="d-flex align-items-center">
        <img
          src={imglogo}
          alt="School Logo"
          className="school-logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <span className="school-name">KID'S RITES INTERNATIONAL SCHOOL</span>
      </NavbarBrand>

      {/* Menu */}
      <Nav className="ms-auto align-items-center" navbar>
        {/* {menu.map((item) => (
          <NavItem key={item.name} className="mx-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          </NavItem>
        ))} */}
{menu.map((item) => (
  <NavItem key={item.name} className="mx-2">
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        isActive ? "nav-link active-link" : "nav-link"
      }
    >
      {item.name}
    </NavLink>
  </NavItem>
))}

        <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="nav-link">
            Pages
          </DropdownToggle>

          <DropdownMenu end>
               <DropdownItem tag={NavLink} to="/event">Events</DropdownItem>
              <DropdownItem tag={NavLink} to="/gallery">Gallery</DropdownItem>
            <DropdownItem tag={NavLink} to="/testimonials">
              Testimonials
            </DropdownItem>

       
          
          </DropdownMenu>
        </Dropdown>

        {/* Apply Button */}
        {/* <Button
          variant="contained"
          color="warning"
          component={NavLink}
          to="/admissions"
          className="ms-3 org-btn"
        >
          Apply Now
        </Button> */}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;







