import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Typeahead from "../typeahead/Typeahead";

import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import Enquiries from "../pages/enquiries/Enquiries";
import AccommodationDetails from "../pages/specific/AccommodationDetails";
import Footer from "./Footer";
import holidazeLogo from "../../images/holidaze-logo.png";

import ScrollToTop from "../common/ScrollToTop";
import AdminDashboard from "./AdminDashboard";

function Layout() {
  // Changes the hamburger icon to X icon when clicked
  const [toggle, setToggle] = useState(false);
  const toggleIcon = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Router>
        <section id="navigation">
          <Navbar collapseOnSelect expand="lg">
            <NavLink to="/">
              <Navbar.Brand className="brand">
                <img src={holidazeLogo} alt="Holidaze logo" />
                <div className="brand-texts">
                  <div className="brand-name">Holidaze</div>
                  <div className="brand-slogan">Hotels, BnB and Guesthouses</div>
                </div>
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <i className={"fa-solid fa-bars hamburger-menu" + (toggle ? "fa-solid fa-xmark hamburger-menu" : "")} onClick={toggleIcon}></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Form className="d-flex search-bar">
                <Typeahead />
              </Form>
              <Nav className="me-auto my-2 my-lg-0 nav-icons" navbarScroll>
                <NavLink to="/" className="home-link nav-link">
                  <i className="fa-solid fa-house"></i>
                  Home
                </NavLink>
                <NavLink to="/explore" className="explore-link nav-link">
                  <i className="fa-solid fa-map"></i>
                  Explore
                </NavLink>
                <HashLink to="#footer" className="nav-link">
                  <i className="fa-solid fa-envelope"></i>
                  Contact
                </HashLink>
                <AdminDashboard />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </section>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/enquiries" element={<Enquiries />} />
            <Route path="/explore/accommodationdetails/:id" element={<AccommodationDetails />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default Layout;
