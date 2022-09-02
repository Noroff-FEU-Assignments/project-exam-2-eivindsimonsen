import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  slug: yup.string().required("Subject is required"),
  excerpt: yup.string().required("Mail is required"),
  content: yup.string().required("Content is required"),
});

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [serverSuccess, setServerSuccess] = useState(null);

  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);

    data.status = "publish";

    try {
      const response = await http.post("wp-json/wp/v2/posts", data);
      console.log("Response", response.data);
      setServerSuccess("Message successfully sent");
    } catch (error) {
      setServerError("You must be logged in to send a message");
    } finally {
      setSubmitting(false);
    }
  }

  // Validation
  const title = document.querySelector(".firstName");
  const slug = document.querySelector(".email");
  const excerpt = document.querySelector(".subject");
  const content = document.querySelector(".message");

  const formInputs = document.querySelectorAll("input, textarea");
  formInputs.forEach(() => {
    if (errors.title) {
      title.classList.add("input-error");
      title.classList.add("input-error-still-icon");
    } else {
      title.classList.remove("input-error");
      title.classList.remove("input-error-still-icon");
    }

    if (errors.slug) {
      slug.classList.add("input-error");
      slug.classList.add("input-error-still-icon");
    } else {
      slug.classList.remove("input-error");
      slug.classList.remove("input-error-still-icon");
    }

    if (errors.excerpt) {
      excerpt.classList.add("input-error");
      excerpt.classList.add("input-error-still-icon");
    } else {
      excerpt.classList.remove("input-error");
      excerpt.classList.remove("input-error-still-icon");
    }

    if (errors.content) {
      content.classList.add("input-error");
      content.classList.add("input-error");
    } else {
      content.classList.remove("input-error");
      content.classList.remove("input-error-still-icon");
    }
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form-inputs">
        <div className="form-icons-position">
          <i className="fa-solid fa-user form-icons"></i>
          <input name="title" type="text" placeholder="First name" className="firstName" {...register("title", { required: true, min: 1 })} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="form-icons-position">
          <i className="fa-solid fa-envelope form-icons"></i>
          <input name="slug" type="text" placeholder="Email" className="email" {...register("slug", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.slug && <span>{errors.slug.message}</span>}
        </div>

        <div className="form-icons-position">
          <i className="fa-solid fa-file-lines form-icons"></i>
          <input name="excerpt" type="text" placeholder="Subject" className="subject" {...register("excerpt", { required: true, min: 1 })} />
          {errors.excerpt && <span>{errors.excerpt.message}</span>}
        </div>
      </div>

      <div className="contact-form-textarea">
        <textarea name="content" placeholder="Message" className="message" {...register("content", { required: true, min: 1 })} />
        {errors.content && <span>{errors.content.message}</span>}
      </div>

      <div className="contact-form-button">
        <Button btnClass="cta" btnText={submitting ? "Sending.." : "Send"} />
      </div>
      {serverError && <Alert variant="danger">{serverError}</Alert>}
      {serverSuccess && <Alert variant="success">{serverSuccess}</Alert>}
    </form>
  );
}

export default ContactForm;
