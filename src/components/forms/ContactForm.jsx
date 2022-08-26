import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const firstName = document.querySelector(".firstName");
  const email = document.querySelector(".email");
  const subject = document.querySelector(".subject");
  const message = document.querySelector(".message");

  const formInputs = document.querySelectorAll("input, textarea");
  formInputs.forEach(() => {
    if (errors.firstName) {
      firstName.classList.add("input-error");
      firstName.classList.add("input-error-still-icon");
    } else {
      firstName.classList.remove("input-error");
      firstName.classList.add("input-error-still-icon");
    }

    if (errors.email) {
      email.classList.add("input-error");
      email.classList.add("input-error-still-icon");
    } else {
      email.classList.remove("input-error");
      email.classList.remove("input-error-still-icon");
    }

    if (errors.subject) {
      subject.classList.add("input-error");
      subject.classList.add("input-error-still-icon");
    } else {
      subject.classList.remove("input-error");
      subject.classList.remove("input-error-still-icon");
    }

    if (errors.message) {
      message.classList.add("input-error");
      message.classList.add("input-error");
    } else {
      message.classList.remove("input-error");
      message.classList.remove("input-error-still-icon");
    }
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form-inputs">
        <div className="form-icons-position">
          <i className="fa-solid fa-user form-icons"></i>
          <input type="text" placeholder="First name" className="firstName" {...register("firstName", { required: true, min: 1 })} />
          {errors.firstName && <span>Name is required</span>}
        </div>
        <div className="form-icons-position">
          <i className="fa-solid fa-envelope form-icons"></i>
          <input type="text" placeholder="Email" className="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Email is required</span>}
        </div>

        <div className="form-icons-position">
          <i className="fa-solid fa-file-lines form-icons"></i>
          <input type="text" placeholder="Subject" className="subject" {...register("subject", { required: true, min: 1 })} />
          {errors.subject && <span>A subject is required</span>}
        </div>
      </div>

      <div className="contact-form-textarea">
        <textarea placeholder="Message" className="message" {...register("message", { required: true, min: 1 })} />
        {errors.message && <span>Provide your message</span>}
      </div>

      <div className="contact-form-button">
        <Button btnClass="cta" btnText="Send" />
      </div>
    </form>
  );
}

export default ContactForm;
