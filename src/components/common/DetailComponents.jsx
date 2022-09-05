import BookingForm from "../forms/BookingForm";
import { HeadingTwo, HeadingThree, HeadingFour } from "../layout/Headings";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import Alert from "react-bootstrap/Alert";
import Breadcrumbs from "../common/Breadcrumbs";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

// ------------ Accommodation base ------------------------------------------------------------------------------------------------------------
export function AccoBase() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  // Retrieve ID from url
  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    // function that will run every time the component renders
    function () {
      // Get request
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

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
    [newUrl]
  );

  // Display loading indicator until products load
  if (loading) {
    return <Loader />;
  }

  // Display message in dom if error state has a value
  if (error) {
    return <Alert variant="danger">ERROR: An error occured when loading the product, try again later</Alert>;
  }

  // No need for mapping, because we only retrieve one item from the API
  return (
    <>
      <section id="accommodation-base">
        <Breadcrumbs prev="Explore" current={product.name} />
        <Container className="acco-wrapper">
          <div className="detail-name-rating">
            <div>
              <HeadingTwo title={product.name} />
            </div>
            <div>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star"></i>
              <p className="reviews">34 reviews</p>
            </div>
          </div>
          <div className="detail-text">
            <p className="detail-text-address">{product.tags[0].name}</p>
            <p dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
          </div>
          <div className="detail-image-box">
            <div>
              <img src={product.images[0].src} alt={product.images[0].alt} />
            </div>
            <div className="detail-image-box--dark">
              <p>Price a day</p>
              <p>{product.price}kr</p>
              <BookingForm btnClass="cta" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// ------------ Accommodation description ------------------------------------------------------------------------------------------------------------
export function AccoDescription() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  // Retrieve ID from url
  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    // function that will run every time the component renders
    function () {
      // Get request
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

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
    [newUrl]
  );

  // Display loading indicator until products load
  if (loading) {
    return <div></div>;
  }

  // Display message in dom if error state has a value
  if (error) {
    return <Alert variant="danger">ERROR: An error occured when loading the description, try again later</Alert>;
  }

  // No need for mapping, because we only retrieve one item from the API
  return (
    <section id="accommodation-descri">
      <Container>
        <div className="acco-description">
          <HeadingThree title="Description" />
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </div>
      </Container>
    </section>
  );
}

// ------------ Accommodation images ------------------------------------------------------------------------------------------------------------------------
export function AccoImages() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  // Retrieve ID from url
  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    // function that will run every time the component renders
    function () {
      // Get request
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

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
    [newUrl]
  );

  // Display loading indicator until products load
  if (loading) {
    return <div></div>;
  }

  // Display message in dom if error state has a value
  if (error) {
    return <Alert variant="danger">ERROR: An error occured when loading the gallery, try again later</Alert>;
  }

  // No need for mapping, because we only retrieve one item from the API
  return (
    <section id="accommodation-images">
      <Container className="acco-wrapper">
        <div className="acco-images">
          <HeadingFour title="Gallery" />
          <div className="acco-images-active">
            <img src={product.images[0].src} alt={product.images[0].alt} />
          </div>
          <div className="acco-images-thumbnail">
            <div className="acco-images-sub">
              <img src={product.images[0].src} alt={product.images[0].alt} />
            </div>
            <div className="acco-images-sub">
              <img src={product.images[0].src} alt={product.images[0].alt} />
            </div>
            <div className="acco-images-sub">
              <img src={product.images[0].src} alt={product.images[0].alt} />
            </div>
          </div>
        </div>
        <BookingForm btnClass="cta-alt" />
      </Container>
    </section>
  );
}
