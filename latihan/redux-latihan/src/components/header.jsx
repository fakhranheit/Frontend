import React, { useState } from 'react';
import {connect} from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="warnaHeader" dark expand="md">
        <NavbarBrand href="/">Redux</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto flex-column" navbar>
            <NavItem>
              <NavLink href="/components/">Jam</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Harga</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Harga</NavLink>
            </NavItem>
            <NavItem>
            <NavLink>{props.bayarParkir}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    bayarParkir: state.Bayar
  };
};

export default connect(MapStateToProps)(Header);