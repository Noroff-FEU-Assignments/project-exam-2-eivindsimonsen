import { HeadingThree } from "../layout/Headings";
import { ButtonLinkArrow } from "../common/Buttons";

import { useState, useEffect } from "react";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

function PopularCard() {
  // Get request
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            // Assign the json to product state
            setProduct(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message in dom if error occurs
  if (error) {
    return <div>ERROR: An error occured</div>;
  }

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
