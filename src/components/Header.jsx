import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink className="mx-4" to="/login">
              Login
            </NavLink>
            <NavLink to="/book">Book</NavLink>
          </Nav>
          {user && (
            <span className="text-white">
              Welcome {user.email}{" "}
              <button onClick={handleLogout}> Log out</button>
            </span>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
