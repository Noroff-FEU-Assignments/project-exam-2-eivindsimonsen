import { HeadingTwo } from "../layout/Headings";
import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";
import { useState } from "react";
import { Alert } from "react-bootstrap";

import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";
import axios from "axios";

const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

export default function EstablishmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [postSuccess, setPostSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /* const onSubmit = (data) => console.log(data); */
  console.log(errors);

  async function onSubmit(data) {
    setSubmitting(true);
    setPostError(null);
    setPostSuccess(null);

    console.log(data);

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

  // Validation
  const name = document.querySelector(".accommodationName");
  const description = document.querySelector(".description");
  const short_description = document.querySelector(".short-description");
  const regular_price = document.querySelector(".regular_price");
  const images = document.querySelector(".image");
  const tags = document.querySelector(".tags");

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

      if (errors.images) {
        images.classList.add("input-error");
        images.classList.add("input-error-still-icon");
      } else {
        images.classList.remove("input-error");
        images.classList.remove("input-error-still-icon");
      }

      if (errors.tags) {
        tags.classList.add("input-error");
        tags.classList.add("input-error-still-icon");
      } else {
        tags.classList.remove("input-error");
        tags.classList.remove("input-error-still-icon");
      }
    });
  }, 100);

  return (
    <section id="establish-form">
      <HeadingTwo title="Create an establishment" />
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form establish-form">
        <div>
          {errors.name && <span>Accommodation name is required</span>}
          <input name="name" type="text" placeholder="Accommodation Name" className="accommodationName" {...register("name", { required: true, max: 20, min: 5, maxLength: 80 })} />

          {errors.short_description && <span>Short description is required</span>}
          <textarea name="short_description" type="text" placeholder="Short description" className="short-description" {...register("short_description", { required: true, max: 60, min: 100 })} />

          {errors.description && <span>Description is required</span>}
          <textarea name="description" placeholder="Main Description" className="description" {...register("description", { required: true, max: 100, min: 20 })} />
        </div>

        <div>
          {errors.regular_price && <span>Price is required</span>}
          <input name="regular_price" type="number" placeholder="Price" className="regular_price" {...register("regular_price", { required: true, maxLength: 12 })} />

          {errors.tags && <span>Location is required</span>}
          <input name="tags.0.name" type="text" placeholder="Location" className="tags" {...register("tags.0.name", { required: true, max: 60, min: 1 })} />

          <label htmlFor="image">Image Url</label>
          {errors.images && <span>A URL image is required</span>}
          <input name="images.0.src" type="url" className="image" {...register("images.0.src", { required: true })} />

          <div>
            <input type="range" placeholder="Rating" {...register("rating", {})} />

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
