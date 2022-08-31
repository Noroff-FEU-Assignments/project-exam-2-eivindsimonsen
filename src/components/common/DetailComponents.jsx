import BookingForm from "../forms/BookingForm";
import { HeadingTwo, HeadingThree } from "../layout/Headings";
import { Container } from "react-bootstrap";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

// ------------ Accommodation base ------------
export function AccoBase() {
  // Get request
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

          if (response.ok) {
            const json = await response.json();
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
    [newUrl]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message in dom if error occurs
  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <section id="accommodation-base">
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
            <i className="fa-solid fa-star star-colored"></i>
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
            <div className="popular-card-feature details-feature">
              <div>{product.attributes[0].options[0]}</div>
              <div>{product.attributes[0].options[1]}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ------------ Accommodation description ------------
export function AccoDescription() {
  // Get request
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

          if (response.ok) {
            const json = await response.json();

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
    [newUrl]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message in dom if error occurs
  if (error) {
    return <div>ERROR: An error occured</div>;
  }

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

// ------------ Accommodation images ------------
export function AccoImages() {
  // Get request
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  // If id does not exist, return to index page
  if (!id) {
    navigate("/");
  }

  const newUrl = API_PRODUCT_URL + id + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

          if (response.ok) {
            const json = await response.json();

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
    [newUrl]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message in dom if error occurs
  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <section id="accommodation-images">
      <Container className="acco-wrapper">
        <div className="acco-images">
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
