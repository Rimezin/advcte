import React from "react";
import Logo from "../assets/Logo";
import Waves from "./splash/Waves";
import Birds from "./splash/Birds";
import Toast from "../assets/Toast";

export default function Splash(props) {
  const { session, handleSession } = props;
  const [toast, setToast] = React.useState([]);
  // setModal

  // Toasts //
  React.useEffect(() => {
    if (session.experience.darkMode) {
      setToast([
        {
          message: "Dark Mode is enabled based on your browser settings.",
          icon: "bi-moon-stars-fill",
          title: "Advcte",
          time: "just now",
          delay: "10000",
          autoHide: "true",
        },
      ]);
    }
  }, [toast, setToast, session.experience.darkMode]);

  function renderToasts() {
    if (toast.length > 0) {
      return (
        <Toast
          message={toast[0].message}
          icon={toast[0].icon}
          title={toast[0].title}
          time={toast[0].time}
          delay={toast[0].delay}
          autoHide={toast[0].autoHide}
        />
      );
    }
  }

  return (
    <div
      className={`splash-container text-center ${
        session.experience.darkMode ? "bg-dark text-white" : ""
      }`}
    >
      <div
        aria-live="polite"
        aria-atomic="true"
        style="position: relative; min-height: 200px;"
      >
        <div style="position: absolute; top: 0; right: 0;">{renderToasts}</div>
      </div>
      <div className="form-signin">
        <form className="text-center form-signin">
          <Logo logoClass="logo-large" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            id="splash-signin"
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleSession}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">Under Development</p>
        </form>
      </div>
      <Birds />
      <Waves />
    </div>
  );
}
