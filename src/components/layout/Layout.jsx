import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import Enquiries from "../pages/enquiries/Enquiries";

import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Container>
            <Navbar expand="lg">
              <NavLink to="/" className="brand">
                <Navbar.Brand>Holidaze</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/explore" className="nav-link">
                    Explore
                  </NavLink>
                  <HashLink to="#footer" className="nav-link" id="no-active-link">
                    Contact
                  </HashLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/enquiries" element={<Enquiries />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
