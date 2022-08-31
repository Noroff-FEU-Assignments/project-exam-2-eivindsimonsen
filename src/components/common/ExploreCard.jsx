import { HeadingThree } from "../layout/Headings";
import { ButtonLinkArrow } from "./Buttons";
import Container from "react-bootstrap/Container";
import Loader from "./Loader";
import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

function ExploreCard() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

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
  return (
    <>
      {product.map(function (item) {
        return (
          <Container key={item.id} className="card-container">
            <div className="explore-card">
              <div className="explore-card-img">
                <img src={item.images[0].src} alt={item.images[0].alt} />
              </div>
              <div className="explore-card-details">
                <div className="explore-card-title">
                  <HeadingThree title={item.name} />
                  <div className="explore-card-title-ratings">
                    <i className="fa-solid fa-star star-colored"></i>
                    <i className="fa-solid fa-star star-colored"></i>
                    <i className="fa-solid fa-star star-colored"></i>
                    <i className="fa-solid fa-star star-colored"></i>
                    <i className="fa-solid fa-star star-colored"></i>
                  </div>
                </div>
                <div>
                  <p dangerouslySetInnerHTML={{ __html: item.short_description }}></p>
                </div>
                <div className="explore-card-footer">
                  <p>{item.price}kr / day</p>
                  <ButtonLinkArrow location={`/explore/accommodationDetails/${item.id}`} btnClass="cta" btnText="Read more" />
                </div>
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
}

export default ExploreCard;
