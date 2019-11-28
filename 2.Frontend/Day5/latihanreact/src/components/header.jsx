import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log('masuk header')
  return (
    <div>
      <Navbar className="header" expand="md">
        <NavbarBrand href="/"  style={{color:'white'}}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{color:'white'}}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/fakhranheit"  style={{color:'white'}}>GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret  style={{color:'white'}}>
                {props.namauser}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  style={{color:'white'}}>Option 1</DropdownItem>
                <DropdownItem  style={{color:'white'}}>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem  style={{color:'white'}}>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
