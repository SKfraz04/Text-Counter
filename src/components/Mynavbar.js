import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  NavDropdown,
  Row,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Col>
              <Navbar
                className="topnavbar my-2"
                fixed="top"
                variant="dark"
                bg="dark"
                expand="lg"
              >
                <Container>
                  <NavbarBrand href="#">
                    <img
                      src="image/engineering.png"
                      height="43"
                      width="45"
                      alt="logo"
                      className="aline-top"
                    />
                    &nbsp;
                  </NavbarBrand>
                  <Link to="/" className="nav-link mx-3">
                    Home
                  </Link>
                  <Link to="/about" className="nav-link mx-3">
                    About
                  </Link>

                  <NavbarToggle aria-controls="my-nav" />
                  <NavbarCollapse className="allnav text-light" id="my-nav">
                    <NavDropdown
                      className="fw-bold pe-3"
                      title="Account"
                      id="my-nav"
                    >
                      <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text className="commonbtn" href="#">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                        </label>
                      </div>{" "}
                      {/* <Button href="#">Buynow</Button> */}
                    </Navbar.Text>
                  </NavbarCollapse>
                </Container>
              </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNavbar;
