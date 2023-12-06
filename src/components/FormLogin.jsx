import { Link } from "react-router-dom";

import "./styles/FormRegister.scss";
import "./styles/FormButton.scss";
import { useEffect, useState } from "react";

export const FormLogin = () => {
  const [loginHasError, setLoginHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setLoginHasError(false);

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem("token", data.token);
          return data.token;
        } else if (data.status === 401) {
          console.log(data.message);
          setLoginHasError(true);
          return false;
        }
      })
      .then((token) => {
        if (token) {
          return fetch(`${process.env.REACT_APP_API}/auth/me`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          });
        } else {
          return false;
        }
      })
      .then((x) => x.json())
      .then((fetchedUser) => {
        localStorage.setItem("user", JSON.stringify(fetchedUser));
        window.location.href = "/perfil";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/perfil";
    }
  }, []);

  return (
    <>
      <section className="content">
        <nav className="auth-nav">
          <p className="auth-link">¿No tienes cuenta?</p>
          <Link to="/register" className="underline">
            Regístrate
          </Link>
        </nav>
        <main>
          <div className="auth-content">
            <h2 className="form-title">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
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
                  name="password"
                  value={password}
                />
              </fieldset>
              <fieldset>
                {loginHasError && (
                  <label className="text-red-600">
                    Usuario y/o contraseña incorrectos
                  </label>
                )}
              </fieldset>
              <button className="btn">Iniciar sesión</button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};
