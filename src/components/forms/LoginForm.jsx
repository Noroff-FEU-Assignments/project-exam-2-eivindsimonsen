import { HeadingOne } from "../layout/Headings";
import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // Validation
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");

  const formInputsLogin = document.querySelectorAll(".login-form input");

  formInputsLogin.forEach(() => {
    if (errors.username) {
      username.classList.add("input-error");
      username.classList.add("input-error-still-icon");
    } else {
      username.classList.remove("input-error");
      username.classList.remove("input-error-still-icon");
    }

    if (errors.password) {
      password.classList.add("input-error");
      password.classList.add("input-error-still-icon");
    } else {
      password.classList.remove("input-error");
      password.classList.remove("input-error-still-icon");
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form">
        <HeadingOne title="Login" />
        <div className="form-icons-position">
          <i className="fa-solid fa-user form-icons"></i>
          <input type="text" placeholder="Username" className="username" {...register("username", { required: true, min: 1, maxLength: 80 })} />
          {errors.username && <span>Username does not exists</span>}
        </div>
        <div className="form-icons-position">
          <i className="fa-solid fa-key form-icons"></i>
          <input type="password" placeholder="Password" className="password" {...register("password", { required: true, min: 4 })} />
          {errors.password && <span>Wrong password</span>}
        </div>

        <div className="contact-form-button">
          <Button btnClass="cta" btnText="Login" />
        </div>
      </div>
    </form>
  );
}
