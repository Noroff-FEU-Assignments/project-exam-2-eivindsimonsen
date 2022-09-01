import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
  return (
    <>
      <div className="wrapper">
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
                <i className="fa-solid fa-bars hamburger-menu"></i>
              </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Form className="d-flex search-bar">
                  <input type="search" placeholder="Search..." className="search-bar-input" aria-label="Search" />
                  <label htmlFor="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </label>
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
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
