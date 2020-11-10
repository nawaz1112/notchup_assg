import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from './../images/Teal_fb.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" light fixed="fixed-top" expand="md">
        <NavbarBrand className="ml-3" href="/"><img src={Logo} alt="logo-img" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" active><h5 className="mr-5">Online coding</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h5 className="mr-5">Spoken English</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h5 className="mr-5">Group Classes</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h5 className="mr-5">About Us</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h5 className="mr-5">Join Us</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h5 className="mr-5">Contact Us</h5></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <hr className="m-0 p-0" />
    </>
  );
}

export default NavBar;