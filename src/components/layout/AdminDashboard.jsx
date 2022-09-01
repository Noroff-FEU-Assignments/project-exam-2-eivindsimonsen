import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function AdminDashboard() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  // The nav links are not disguised here because it messed up the active classes, I think it's because the admin dashboard loads later than the normal nav
  return (
    <>
      {auth ? (
        <>
          <NavLink to="/admin" className="admin-link nav-link">
            <i className="fa-solid fa-map"></i>
            Admin
          </NavLink>
          <NavLink to="/enquiries" className="enquiries-link nav-link">
            <i className="fa-solid fa-map"></i>
            Enquiries
          </NavLink>
          <button className="cta cta--nav" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <NavLink to="/login" className="login-link nav-link">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          Login
        </NavLink>
      )}
    </>
  );
}

export default AdminDashboard;
