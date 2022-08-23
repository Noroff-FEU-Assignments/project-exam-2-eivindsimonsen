import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
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
                  <img src={holidazeLogo} alt="Holidaze logo" />
                  <div className="brand-texts">
                    <div className="brand-name">Holidaze</div>
                    <div className="brand-slogan">Hotels, B&B and guesthouses</div>
                  </div>
                </Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex search-bar">
                  <Form.Control type="search" id="search" placeholder="Search acommodation" className="me-2 search-bar-input" aria-label="Search" />
                  <label htmlFor="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </label>
                </Form>
                <Nav className="me-auto my-2 my-lg-0 nav-icons" navbarScroll>
                  <NavLink to="/" className="nav-link">
                    <i className="fa-solid fa-house"></i>
                    Home
                  </NavLink>
                  <NavLink to="/explore" className="nav-link">
                    <i className="fa-solid fa-map"></i>
                    Explore
                  </NavLink>
                  <HashLink to="#footer" className="nav-link">
                    <i className="fa-solid fa-envelope"></i>
                    Contact
                  </HashLink>
                  <NavLink to="/login" className="nav-link">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
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
