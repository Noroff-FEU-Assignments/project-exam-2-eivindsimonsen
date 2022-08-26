import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Button as MyButton } from "../common/Buttons";

// Handle modal
export default function BookingForm({ btnClass }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const firstNameBooking = document.querySelector(".firstNameBooking");
  const emailBooking = document.querySelector(".emailBooking");
  const number = document.querySelector(".number");
  const fromDate = document.querySelector(".fromDate");
  const toDate = document.querySelector(".toDate");
  const persons = document.querySelector(".persons");

  const formInputsBooking = document.querySelectorAll(".booking-form input");

  formInputsBooking.forEach(() => {
    if (errors.firstNameBooking) {
      firstNameBooking.classList.add("input-error");
    } else {
      firstNameBooking.classList.remove("input-error");
    }

    if (errors.emailBooking) {
      emailBooking.classList.add("input-error");
    } else {
      emailBooking.classList.remove("input-error");
    }

    if (errors.number) {
      number.classList.add("input-error");
    } else {
      number.classList.remove("input-error");
    }

    if (errors.fromDate) {
      fromDate.classList.add("input-error");
    } else {
      fromDate.classList.remove("input-error");
    }

    if (errors.toDate) {
      toDate.classList.add("input-error");
    } else {
      toDate.classList.remove("input-error");
    }

    if (errors.persons) {
      persons.classList.add("input-error");
    } else {
      persons.classList.remove("input-error");
    }
  });

  return (
    <>
      <Button className={btnClass} onClick={handleShow}>
        Reserve now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserve hotel name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
            <div className="booking-form-input">
              <i className="fa-solid fa-user form-icons"></i>
              {errors.firstNameBooking && <span>Name is required</span>}
              <input type="text" placeholder="First name" className="firstNameBooking" {...register("firstNameBooking", { required: true, maxLength: 80 })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-envelope form-icons"></i>
              {errors.emailBooking && <span>Email is required</span>}
              <input type="text" placeholder="Email" className="emailBooking" {...register("emailBooking", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-phone form-icons"></i>
              {errors.number && <span>Phone number required</span>}
              <input type="tel" placeholder="Mobile number" className="number" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
            </div>

            <div className="booking-form-input">
              {errors.fromDate && <span>Select start day</span>}
              <input type="datetime-local" placeholder="From date" className="fromDate" {...register("fromDate", { required: true })} />
            </div>

            <div className="booking-form-input">
              {errors.toDate && <span>Select final day</span>}
              <input type="datetime-local" placeholder="To" className="toDate" {...register("toDate", { required: true })} />
            </div>

            <div className="booking-form-input">
              <i className="fa-solid fa-users form-icons"></i>
              {errors.persons && <span>Select how many visitors</span>}
              <input type="number" placeholder="Persons" className="persons" {...register("persons", { required: true, max: 9, min: 1 })} />
            </div>

            <div className="contact-form-button">
              <MyButton btnClass="cta" btnText="Send" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

<BookingForm />;
