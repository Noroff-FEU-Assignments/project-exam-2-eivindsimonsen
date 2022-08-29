import { Link } from "react-router-dom";

export function Button({ btnClass, btnText }) {
  return (
    <button type="submit" className={btnClass}>
      <div>{btnText}</div>
      <div className="cta-arrow">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </button>
  );
}

export function ButtonLink({ location, btnClass, btnText }) {
  return (
    <Link to={location} className={btnClass}>
      <div>{btnText}</div>
    </Link>
  );
}

export function ButtonLinkArrow({ location, btnClass, btnText }) {
  return (
    <Link to={location} className={btnClass}>
      <div>{btnText}</div>
      <div className="cta-arrow">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </Link>
  );
}
