import { HeadingTwo } from "../layout/Headings";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../common/Buttons";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";

const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

const schema = yup.object().shape({
  // There is no validation for images and location because they have special register routes than the others, and i can't target them.
  name: yup.string().required("Please enter a value").min(1, "Please enter a accommodation name"),
  short_description: yup.string().required("Please enter a value").min(400, "Must be at least 400 characters"),
  description: yup.string().required("Please enter a value").min(1000, "Must be at least 1000 characters"),
  regular_price: yup.string().required("Please enter a price tag"),
});

export default function EstablishmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [postSuccess, setPostSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  /* const onSubmit = (data) => console.log(data); */
  /* console.log(errors); */

  async function onSubmit(data) {
    setSubmitting(true);
    setPostError(null);
    setPostSuccess(null);

    /* console.log(data); */

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("Response", response.data);
      setPostSuccess("Product created!");
    } catch (error) {
      setPostError("Could not create, check if values are correct");
    } finally {
      setSubmitting(false);
    }
  }

  // Validation input class
  const name = document.querySelector(".accommodationName");
  const description = document.querySelector(".description");
  const short_description = document.querySelector(".short-description");
  const regular_price = document.querySelector(".regular_price");

  const formInputs = document.querySelectorAll("input, textarea");
  setTimeout(function () {
    formInputs.forEach(() => {
      if (errors.name) {
        name.classList.add("input-error");
        name.classList.add("input-error-still-icon");
      } else {
        name.classList.remove("input-error");
        name.classList.remove("input-error-still-icon");
      }

      if (errors.description) {
        description.classList.add("input-error");
        description.classList.add("input-error-still-icon");
      } else {
        description.classList.remove("input-error");
        description.classList.remove("input-error-still-icon");
      }

      if (errors.short_description) {
        short_description.classList.add("input-error");
        short_description.classList.add("input-error-still-icon");
      } else {
        short_description.classList.remove("input-error");
        short_description.classList.remove("input-error-still-icon");
      }

      if (errors.regular_price) {
        regular_price.classList.add("input-error");
        regular_price.classList.add("input-error-still-icon");
      } else {
        regular_price.classList.remove("input-error");
        regular_price.classList.remove("input-error-still-icon");
      }
    });
  }, 100);

  // The form
  return (
    <section id="establish-form">
      <HeadingTwo title="Create an establishment" />
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form establish-form">
        <div>
          <label htmlFor="accommodationName">Accommodation name</label>
          {errors.name && <span>{errors.name.message}</span>}
          <input name="name" type="text" className="accommodationName" {...register("name", { required: true })} />

          <label htmlFor="short-description">Short description</label>
          {errors.short_description && <span>{errors.short_description.message}</span>}
          <textarea name="short_description" type="text" placeholder="400 characters*" className="short-description" {...register("short_description", { required: true })} />

          <label htmlFor="description">Main Description</label>
          {errors.description && <span>{errors.description.message}</span>}
          <textarea name="description" placeholder="1000 characters*" className="description" {...register("description", { required: true })} />
        </div>

        <div>
          <label htmlFor="regular_price">Price</label>
          {errors.regular_price && <span>{errors.regular_price.message}</span>}
          <input name="regular_price" type="number" className="regular_price" {...register("regular_price", { required: true })} />

          <label htmlFor="tags">Location</label>
          {errors.tags && <span>Location is required</span>}
          <input name="tags" type="text" className="tags" {...register("tags.0.name", { required: true })} />

          <label htmlFor="image">Image Url</label>
          {errors.images && <span>A URL image is required</span>}
          <input name="images" type="url" placeholder="Image url*" className="image" {...register("images.0.src", { required: true })} />

          <label htmlFor="rating">Rating</label>
          <div className="rating-slider">
            <input type="range" placeholder="Rating" className="rating" {...register("rating", {})} />
            <div className="popular-card-rating">
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
            </div>
            <div className="contact-form-button">
              <Button btnClass="cta" btnText={submitting ? "Creating" : "Create"} />
            </div>
          </div>
        </div>
        {postError && <Alert variant="danger">{postError}</Alert>}
        {postSuccess && <Alert variant="success">{postSuccess}</Alert>}
      </form>
    </section>
  );
}
