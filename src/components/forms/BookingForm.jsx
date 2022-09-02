import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Button as MyButton } from "../common/Buttons";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { API_ORDERS_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

const url = API_ORDERS_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

// Handle modal
export default function BookingForm({ btnClass }) {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // post request
  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setSubmitting(true);
    setBookingError(null);
    setBookingSuccess(null);

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("Response", response.data);
      setBookingSuccess("Enquiry sent!");
      setTimeout(function () {
        handleClose();
      }, 1000);
    } catch (error) {
      setBookingError("Could not send, all details correct?");
    } finally {
      setSubmitting(false);
    }
  }

  // There is no validation here because the register field in each input is not a valid name for yup. However, you can't send an enquiry before every field is filled.

  return (
    <>
      <Button className={btnClass} onClick={handleShow}>
        Reserve now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserve accommodation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
            <div className="booking-form-input">
              <i className="fa-solid fa-user form-icons"></i>
              {errors.name && <span>Please fill out a name</span>}
              <input name="name" type="text" placeholder="First name" className="firstNameBooking" {...register("billing.first_name", { required: true })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-hotel form-icons"></i>
              {errors.name && <span>Please fill out a name</span>}
              <input name="name" type="text" placeholder="Accommodation name" className="accommodation-name" {...register("billing.last_name", { required: true })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-envelope form-icons"></i>
              {errors.email && <span>Please fill out a name</span>}
              <input name="email" type="text" placeholder="Email" className="emailBooking" {...register("billing.email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-phone form-icons"></i>
              {errors.phone && <span>Please fill out a name</span>}
              <input name="phone" type="tel" placeholder="Mobile number" className="number" {...register("billing.phone", { required: true })} />
            </div>

            <div className="booking-form-input">
              {errors.fromDate && <span>Please fill out a name</span>}
              <input name="fromDate" type="datetime-local" placeholder="From date" className="fromDate" {...register("billing.address_1", { required: true })} />
            </div>

            <div className="booking-form-input">
              {errors.toDate && <span>Please fill out a name</span>}
              <input name="toDate" type="datetime-local" placeholder="To" className="toDate" {...register("billing.address_2", { required: true })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-users form-icons"></i>
              {errors.quantity && <span>Please fill out a name</span>}
              <input name="quantity" type="number" placeholder="Persons" className="persons" {...register("billing.company", { required: true })} />
            </div>

            <div className="contact-form-button">
              <MyButton btnClass="cta" btnText={submitting ? "Creating" : "Create"} />
            </div>
            {bookingError && <Alert variant="danger">{bookingError}</Alert>}
            {bookingSuccess && <Alert variant="success">{bookingSuccess}</Alert>}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

<BookingForm />;
