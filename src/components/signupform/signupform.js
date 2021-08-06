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
    <div className="photoform_container">
      <div className="mainPhoto">
        <img
          src={mainPhoto}
          className="main_photo"
          alt="photo of different products"
          width="550px"
        />
      </div>
      <form className="registry_form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name"></label>
        <input
          placeholder="Nombre y apellidos"
          id="name"
          {...register("name", {
            required: "requerido",
          })}
          type="text"
        />
        {errors.name && <span role="alert">{errors.name.message}</span>}
        <label htmlFor="email"></label>
        <input
          placeholder="Correo electrónico"
          id="email"
          {...register("email", {
            required: "requerido",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Introduzca una dirección de correo electrónico válida",
            },
          })}
          type="email"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <label htmlFor="password"></label>
        <input
          placeholder="Constraseña"
          id="password"
          {...register("password", {
            required: "requerido",
            minLength: {
              value: 6,
              message: "debe contener al menos 6 caracteres",
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <div className="text_container">
          <p>Al pulsar Regístrate, confirmas haber leído y </p>
          <p>aceptado nuestras Condiciones de uso. Para </p>
          <p>más información sobre el tratamiento de tus </p>
          <p>datos, consulta nuestro Aviso de privacidad </p>
        </div>
        <button type="submit" className="submit_registry">
          Regístrate
        </button>
      </form>
    </div>
  );
};

export default SignUp;
