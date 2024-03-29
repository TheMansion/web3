import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import "./styles/FormRegister.scss";
import "./styles/FormButton.scss";
import { useState } from "react";

export const FormRegister = () => {
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
      if (!emailIsValid) {
        return false;
      } else {
        return true;
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
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateRegister()) {
      await fetch(`${process.env.REACT_APP_API}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
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
            setTimeout(() => {
              window.location.href = "/login";
            }, 5000);
          } else if (data.status === 401) {
            console.log(data.message);
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
                    <label className="text-red-600">
                      Email inválido o en uso
                    </label>
                  )}
                </fieldset>
                <button className="btn" disabled={!name || !email || !password}>
                  Registrarte
                </button>
              </form>
            )}
          </div>
        </main>
      </section>
    </>
  );
};
