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

import holidazeLogo from "../../images/holidaze-logo.png";

function Layout() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Container>
            <Navbar expand="lg">
              <NavLink to="/">
                <Navbar.Brand className="brand">
                  <img src={holidazeLogo} className="brand-image" width="90" height="90" alt="Holidaze logo" />
                  <div className="brand-texts">
                    <div className="brand-name">Holidaze</div>
                    <div className="brand-slogan">Hotels, B&B and guesthouses</div>
                  </div>
                </Navbar.Brand>
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
