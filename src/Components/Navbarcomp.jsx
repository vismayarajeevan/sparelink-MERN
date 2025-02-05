import React, { useState } from 'react'
import { Navbar, Container, Form, Nav } from "react-bootstrap";
 import user from '../assets/user.svg'
 import logo from '../assets/logo.png'


const Navbarcomp = () => {
      const [activeLink, setActiveLink] = useState("home");
      
    
  return (
    <>
      <Navbar expand="lg" className="bg-body-light">
      <Container>
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <img src={logo} className="img-fluid" width="50px" alt="" />
          <Form className="flex-grow-1 d-lg-inline d-none">
            <Form.Control
              type="search"
              placeholder="Search here..."
              style={{
                width: "300px",
                border: "none",
                background: "#F0F0F0",
              }}
              aria-label="Search"
            />
          </Form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-lg-5">

          {/* search bar for small screens */}
          <Form className="w-100 d-lg-none mb-3">
            <Form.Control
              type="search"
              placeholder="Search here..."
              style={{
                width: "100%",
                maxWidth:'250px',
                border: "none",
                background: "#F0F0F0",
              }}
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto gap-lg-5 gap-2">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active" : "text-secondary"}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#posts"
              className={activeLink === "posts" ? "active" : "text-secondary"}
              onClick={() => setActiveLink("posts")}
            >
              My Posts
            </Nav.Link>
            <Nav.Link
              href="#designs"
              className={activeLink === "designs" ? "active" : "text-secondary"}
              onClick={() => setActiveLink("designs")}
            >
              Designs
            </Nav.Link>
            <Nav.Link
              href="#profile"
              className={`d-inline d-lg-none ${
                activeLink === "profile" ? "active" : "text-secondary"
              }`}
              onClick={() => setActiveLink("profile")}
            >
              Profile
            </Nav.Link>
          </Nav>
          <div>
            {/* Show image on large screens */}
            <button className="btn d-none d-lg-inline">
              <img src={user} className="img-fluid" width="40px" alt="" />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  )
}

export default Navbarcomp