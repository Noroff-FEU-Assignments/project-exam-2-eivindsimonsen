import { useForm } from "react-hook-form";

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
    } else {
      firstName.classList.remove("input-error");
    }

    if (errors.email) {
      email.classList.add("input-error");
    } else {
      email.classList.remove("input-error");
    }

    if (errors.subject) {
      subject.classList.add("input-error");
    } else {
      subject.classList.remove("input-error");
    }

    if (errors.message) {
      message.classList.add("input-error");
    } else {
      message.classList.remove("input-error");
    }
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form-inputs">
        <input type="text" placeholder="First name" className="firstName" {...register("firstName", { required: true, min: 1 })} />
        {errors.firstName && null}

        <input type="text" placeholder="Email" className="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && null}

        <input type="text" placeholder="Subject" className="subject" {...register("subject", { required: true, min: 1 })} />
        {errors.subject && null}
      </div>

      <div className="contact-form-textarea">
        <textarea placeholder="Message" className="message" {...register("message", { required: true, min: 1 })} />
        {errors.message && null}
      </div>

      <div className="contact-form-button">
        <button type="submit" className="cta">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
