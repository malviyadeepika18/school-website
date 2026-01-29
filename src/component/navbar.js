import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, NavbarToggler,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Enquireform from "../component/enquireform";
import imglogo from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";

const NavbarComp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academic" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <Navbar
      expand="md"
      light
      fixed="top"
      className=" bg-white shadow-sm mobile-navbar"
      // style={{ height: "70px" }}
    >

 <NavbarToggler
    onClick={toggleOffcanvas}
    className="d-md-none mobile-toggler"
  />

      {/* Logo */}
      <NavbarBrand tag={NavLink} to="/" className=" navbar-brand-center">
        <img
          src={imglogo}
          alt="School Logo"
          className="school-logo"
          // style={{ height: "50px", marginRight: "10px" }}
        />
 <div className="school-text">
      <span className="school-main">KID'S RITES INTERNATIONAL</span>
      <span className="school-sub">SCHOOL</span>
    </div>
{/* <span className="school-name">KID'S RITES INTERNATIONAL SCHOOL</span> */}
      </NavbarBrand>

      






      {/* Menu */}
      <Nav className="ms-auto align-items-center d-none d-md-flex" navbar>
      
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

        
      </Nav>
    </Navbar>


 <Offcanvas
        isOpen={isOffcanvasOpen}
        toggle={toggleOffcanvas}
        direction="start"
        className="offcanvas-width"
      >
        <OffcanvasHeader toggle={toggleOffcanvas} className="menuheader">
          Menu
        </OffcanvasHeader>

        <OffcanvasBody className="fontweight-list">
          <Nav vertical>
            {menu.map((item) => (
              <NavItem key={item.name} className="mb-2">
                <NavLink
                  to={item.path}
                  className="nav-link fs-5 "
                  onClick={toggleOffcanvas}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}

            <hr />

            <NavItem>
              <NavLink
                to="/event"
                className="nav-link fs-5"
                onClick={toggleOffcanvas}
              >
                Events
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/gallery"
                className="nav-link fs-5"
                onClick={toggleOffcanvas}
              >
                Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/testimonials"
                className="nav-link fs-5"
                onClick={toggleOffcanvas}
              >
                Testimonials
              </NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
</>
  );
};

export default NavbarComp;







