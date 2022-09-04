import { HeadingThree } from "../layout/Headings";
import { ButtonLinkArrow } from "../common/Buttons";
import Loader from "./Loader";
import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

function PopularCard() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY + "&per_page=30";

  useEffect(
    // function that will run every time the component renders
    function () {
      // The get request
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            // Assign the json to product state
            setProduct(json);
          } else {
            //  If response failes, set error value to error state
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          // Will run regardless of fail or not
          setLoading(false);
        }
      }
      // Call the api
      fetchData();
    },
    [url]
  );

  // Display loading indicator until products load
  if (loading) {
    return <Loader />;
  }

  // Display message in dom if error state has a value
  if (error) {
    return <Alert variant="danger">ERROR: Failed to load products, try again later</Alert>;
  }

  // Map(loop) over the products in the API and return this JSX for each one.
  // If statement makes sure than only featured products display
  // Line 61 is provided a key prop, each parent needs a key prop
  return (
    <>
      {product.map(function (item) {
        if (item.featured === true) {
          return (
            <div key={item.id} id={item.id} className="popular-card">
              <div className="popular-card-img">
                <img src={item.images[0].src} alt={item.images[0].alt} />
              </div>
              <div className="popular-card-details">
                <div className="popular-card-name">
                  <HeadingThree title={item.name} />
                  <p>{item.attributes[0].options[2]}</p>
                </div>
                <div className="popular-card-feature">
                  <div>{item.attributes[0].options[0]}</div>
                  <div>{item.attributes[0].options[1]}</div>
                </div>
                <div className="popular-card-rating">
                  <i className="fa-solid fa-star star-colored"></i>
                  <i className="fa-solid fa-star star-colored"></i>
                  <i className="fa-solid fa-star star-colored"></i>
                  <i className="fa-solid fa-star star-colored"></i>
                  <i className="fa-solid fa-star star-colored"></i>
                </div>
                <div className="popular-card-footer">
                  <p>{item.price}kr / day</p>
                  <ButtonLinkArrow location={`/explore/accommodationDetails/${item.id}`} btnClass="cta" btnText="Read more" />
                </div>
              </div>
            </div>
          );
        }
        // Just set to fix the function craving a return outside the if statement
        return this;
      })}
    </>
  );
}

export default PopularCard;
