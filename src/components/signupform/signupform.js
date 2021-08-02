import "./signupform.css";
import { useForm } from "react-hook-form";
import mainPhoto from "./../../assets/register-photo.svg";
import { API_ROOT } from "../../utils/apiHost/apiHost";
import { useHistory } from "react-router-dom";

const SignUp = ({ login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data) => {
    fetch(`${API_ROOT}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response.statusText;
      })
      .then((json) => {
        localStorage.setItem("token", json.token);
        history.push("/");
      })
      .catch((error) => {
        console.log("error ocurred", error);
        alert("vaya, algo ha ido mal :(");
      });
  };

  return (
    <div className="photo-form-container">
      <div className="mainPhoto">
        <img
          src={mainPhoto}
          className="main-photo"
          alt="photo of different products"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <label htmlFor="email">email</label>
        <input
          id="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Los valores introducidos no coinciden con un email",
            },
          })}
          type="email"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <label htmlFor="password">password</label>
        <input
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 6,
              message: "el minimo son 6",
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default SignUp;
