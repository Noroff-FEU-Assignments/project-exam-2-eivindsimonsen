import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Breadcrumbs({ prev, current }) {
  return (
    <section id="breadcrumbs">
      <Breadcrumb>
        <div>
          <NavLink to="/">{prev}</NavLink>
        </div>
        <div> / </div>
        <div>
          <NavLink to="#" className="breadcrumb-active">
            {current}
          </NavLink>
        </div>
      </Breadcrumb>
    </section>
  );
}

export default Breadcrumbs;
