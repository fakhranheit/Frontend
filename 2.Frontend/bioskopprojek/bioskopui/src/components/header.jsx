import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {LogoutSuccessAction} from './../redux/actions'

const logOutUser=()=>{
  localStorage.clear()
  LogoutSuccessAction()
}

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ height: "100px" }} className="warnaHeader" dark expand="md">
        <NavbarBrand> IMAX </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-5" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Role
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to={"/manageAdmin"} className="menu">
                    Admin &nbsp;
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/login"} className="menu">
                    User
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {props.AuthLog === "" ? (
              <NavItem>
                <Link to={"/login"} className="menu" />
              </NavItem>
            ) : null}
            {props.AuthLog === "" ? null : 
            <NavItem className="mt-2 user d-flex">
              Selamat Datang {props.AuthLog}
            </NavItem>
            }
          </Nav>
          <Nav>
            {props.AuthLog ===""?null:
            <NavItem className="logout">
              <NavLink href="/" onClick={()=>logOutUser()} className="btn btn-dark">Logout</NavLink>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const MapstateToprops = state => {
  return {
    AuthLog: state.Auth.username
  };
};

export default connect(MapstateToprops,{LogoutSuccessAction})(Header);
