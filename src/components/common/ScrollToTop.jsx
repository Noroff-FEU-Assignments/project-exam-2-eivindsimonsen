import { useEffect } from "react";
import { useLocation } from "react-router";

// This code scrolls the page to the top on route change
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
