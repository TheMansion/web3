import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import "./styles/FormRegister.scss";
import "./styles/FormButton.scss";
import { useState } from "react";

export const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerHasError, setRegisterHasError] = useState(false);
  const [emailIsTaken, setEmailIsTaken] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successRegistration, setSuccessRegistration] = useState(false);

  // Inicializacion de Funcion Confetti
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }
  // Fin de Funcion Confetti

  const handleChange = (e) => {
    setRegisterHasError(false);
    setEmailIsTaken(false);
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const validateRegister = () => {
    const textRegex = /(^[a-zA-ZáéíóúÁÉÍÓÚñÑ])+([a-zA-ZáéíóúÁÉÍÓÚñÑ\s])+$/;
    const emailRegex = /^\S+@\S+\.\S+/;

    function validateName(name) {
      let nameIsValid = textRegex.test(name);
      if (!nameIsValid) {
        return false;
      } else {
        return true;
      }
    }

    function validateEmail(email) {
      let emailIsValid = emailRegex.test(email);
      if (emailIsValid === true) {
        return true;
      } else {
        return false;
      }
    }

    function validatePassword(password) {
      let passwordIsValid = password.length > 5;
      if (!passwordIsValid) {
        return false;
      } else {
        return true;
      }
    }

    let existsName = validateName(name);
    let existsEmail = validateEmail(email);
    let existsPassword = validatePassword(password);

    if (existsName && existsEmail && existsPassword) {
      return true;
    } else {
      setRegisterHasError(true);
      setIsLoading(false);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateRegister()) {
      await fetch(`${process.env.REACT_APP_API}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.toLowerCase(),
          email: email.toLowerCase(),
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 201) {
            fire(0.25, {
              spread: 26,
              startVelocity: 55,
            });
            fire(0.2, {
              spread: 60,
            });
            fire(0.35, {
              spread: 100,
              decay: 0.91,
              scalar: 0.8,
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              scalar: 1.2,
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 45,
            });
            setSuccessRegistration(true);
            setIsLoading(false);
            setTimeout(() => {
              window.location.href = "/login";
            }, 5000);
          } else if (data.status === 401) {
            console.log(data.message);
            setIsLoading(false);
            setEmailIsTaken(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setRegisterHasError(true);
    }
  };

  return (
    <>
      <section className="content">
        <nav className="auth-nav">
          <p className="auth-link">¿Ya tienes cuenta? </p>
          <Link to="/login" className="underline">
            Inicia sesión
          </Link>
        </nav>
        <main>
          <div className="auth-content">
            {successRegistration ? (
              <h2 className="form-title">Registro Exitoso!</h2>
            ) : (
              <h2 className="form-title">Registro</h2>
            )}
            {successRegistration ? (
              <Link to={"/login"}>
                <button className="btn">Iniciar sesión</button>
              </Link>
            ) : (
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <label htmlFor="name">Nombre</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    placeholder="6+ caracteres"
                    name="password"
                    value={password}
                  />
                </fieldset>
                <fieldset>
                  {registerHasError && (
                    <label className="text-red-600">Verifica los campos</label>
                  )}
                </fieldset>
                <fieldset>
                  {emailIsTaken && (
                    <>
                      <label className="text-red-600 font-semibold">
                        Correo electrónico ya registrado
                      </label>
                      <span className="text-gray-500 font-normal">
                        Lo sentimos, el correo electrónico ingresado ya está
                        asociado a una cuenta existente en nuestro sistema. Por
                        favor, intenta iniciar sesión o utiliza una dirección de
                        correo electrónico diferente para registrarte.
                      </span>
                    </>
                  )}
                </fieldset>
                <button
                  className="btn"
                  disabled={!name || !email || !password || isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Registrando
                    </>
                  ) : (
                    <>Registrarme</>
                  )}
                </button>
              </form>
            )}
          </div>
        </main>
      </section>
    </>
  );
};
