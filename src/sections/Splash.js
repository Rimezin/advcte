import React from "react";
import Logo from "../assets/Logo";
import Waves from "./splash/Waves";
import Birds from "./splash/Birds";
import Toast from "../assets/Toast";

export default function Splash(props) {
  const { session, handleSession } = props;
  // setModal

  // Toast //
  const [toast, setToast] = React.useState(false);

  React.useEffect(() => {
    if (session.experience.darkMode) {
      setToast(true);
    }
  }, []);

  return (
    <div
      className={`splash-container text-center ${
        session.experience.darkMode ? "bg-dark text-white" : ""
      }`}
    >
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
      {/* Toast */}
      <Toast
        toast={toast}
        setToast={setToast}
        message="Dark mode activated based on your system settings."
        icon="bi-moon-stars-fill"
        title="Advcte"
        time="just now"
      />
      <Birds />
      <Waves />
    </div>
  );
}
