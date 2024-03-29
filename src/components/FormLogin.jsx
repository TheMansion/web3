import { Link } from "react-router-dom";

import "./styles/FormRegister.scss";
import "./styles/FormButton.scss";
import { useEffect, useState } from "react";

export const FormLogin = () => {
  const [loginHasError, setLoginHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

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
        setIsLoading(false);
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
              <button className="btn">
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
                    Iniciando sesión
                  </>
                ) : (
                  <>Iniciar sesión</>
                )}
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};
