import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutSuccessAction } from "./../redux/actions";
import { FaCartPlus } from "react-icons/fa";

const logOutUser = () => {
  localStorage.clear();
  LogoutSuccessAction();
};

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
              <NavLink className="warnalink" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>{props.role === "admin" ? <NavLink href={"/manageAdmin"}>manageAdmin</NavLink> : null}</NavItem>
            <NavItem>
              {props.authLogin ? null : (
                <NavLink>
                  <Link className="warnalink" to={"/login"}>
                    Login
                  </Link>
                </NavLink>
              )}
            </NavItem>
            {props.AuthLog === "" ? (
              <NavItem>
                <Link to={"/login"} className="menu" />
              </NavItem>
            ) : null}
            {props.AuthLog === "" ? null : <NavItem className="mt-2 user d-flex">Selamat Datang {props.AuthLog}</NavItem>}
          </Nav>
          <Nav>
            {props.AuthLog === "" ? null : (
              <NavItem className="logout d-flex">
                <NavLink>
                  <Link to={'/cart'}>
                    <FaCartPlus style={{ color: "white", fontSize: "20px" }} />
                  </Link>
                </NavLink>
                <NavLink href="/" onClick={() => logOutUser()} className="btn btn-dark">
                  Logout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const MapstateToprops = state => {
  return {
    AuthLog: state.Auth.username,
    role: state.Auth.role,
    authLogin: state.Auth.login
  };
};

export default connect(MapstateToprops, { LogoutSuccessAction })(Header);
