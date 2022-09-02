import { Button } from "../common/Buttons";
import Loader from "./Loader";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import { API_ORDERS_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";
import { format } from "date-fns";

function Enquiry() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_ORDERS_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

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
            setOrder(json);
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
    return <Alert variant="danger">ERROR: Failed to load messages, try again later</Alert>;
  }

  return (
    <>
      {order.map(function (orders) {
        return (
          <tr key={orders.id} className="enquiry">
            <td className="enquiry-date delivered-mobile">{format(new Date(orders.date_created), "dd-MM-yyyy")}</td>
            <td className="enquiry-box user-message">
              <div className="user-message-image">
                <i className="fa-solid fa-user"></i>
              </div>
              <p className="delivered-desktop">Delivered: {format(new Date(orders.date_created), "dd-MM-yyyy")}</p>
              <section className="enquiry-details">
                <div className="enquiry-details-person">
                  <p>
                    Full name: <span>{orders.billing.first_name}</span>
                  </p>
                  <p>
                    Email: <span>{orders.billing.email}</span>
                  </p>
                  <p>
                    Phone: <span>{orders.billing.phone}</span>
                  </p>
                </div>
                <div className="enquiry-details-accommodation">
                  <p>
                    Accommodation <span>{orders.billing.last_name}</span>
                  </p>
                  <p>
                    from: <span>{format(new Date(orders.billing.address_1), "dd-MM-yyyy")}</span>
                  </p>
                  <p>
                    to: <span>{format(new Date(orders.billing.address_2), "dd-MM-yyyy")}</span>
                  </p>
                  <p>
                    How many: <span>{orders.billing.company}</span>
                  </p>
                </div>
              </section>
              <div className="contact-form-button enquiry-button">
                <Button btnClass="cta" btnText="Send" />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default Enquiry;
