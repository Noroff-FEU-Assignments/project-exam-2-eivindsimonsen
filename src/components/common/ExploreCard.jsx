import { HeadingThree } from "../layout/Headings";
import { ButtonLinkArrow } from "./Buttons";
import Container from "react-bootstrap/Container";

import { useState, useEffect } from "react";
import { API_PRODUCT_URL } from "../../constants/api";

function ExploreCard() {
  // Get request
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_PRODUCT_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      {product.map(function (item) {
        /* console.log(item.description); */
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
                  <ButtonLinkArrow location="/explore/accommodationDetails" btnClass="cta" btnText="Read more" />
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
