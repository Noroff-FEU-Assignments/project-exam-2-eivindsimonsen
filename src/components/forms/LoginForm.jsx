import { HeadingOne } from "../layout/Headings";
import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_API_URL, API_TOKEN_PATH } from "../../constants/api";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const url = BASE_API_URL + API_TOKEN_PATH;

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /* const onSubmit = (data) => console.log(data); */
  console.log(errors);

  const [auth, setAuth] = useContext(AuthContext);
  console.log(auth);

  // Gets the data from the login form
  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // Log the form inputs
    console.log(data);

    try {
      // post the input into the url, and if credentials are correct, jwt key is returned
      const response = await axios.post(url, data);
      console.log("Response", response.data);
      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      // If the credentials are falsy, set this as error state
      setLoginError("Wrong username or password");
    } finally {
      // Returns the button to normal value
      setSubmitting(false);
    }
  }

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
          {errors.username && <span>Insert username</span>}
        </div>
        <div className="form-icons-position">
          <i className="fa-solid fa-key form-icons"></i>
          <input type="password" placeholder="Password" className="password" {...register("password", { required: true, min: 4, maxLength: 80, pattern: /(?=.*[A-Z])/i })} />
          {errors.password && <span>Insert password</span>}
        </div>

        <div className="contact-form-button">
          <Button btnClass="cta" btnText={submitting ? "Loggin in.." : "Login"} />
        </div>
        {loginError && <Alert variant="danger">{loginError}</Alert>}
      </div>
    </form>
  );
}
