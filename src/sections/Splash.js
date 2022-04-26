import React from "react";
import Logo from "../assets/Logo";
import Waves from "./splash/Waves";
import Birds from "./splash/Birds";
// import Toast from "../assets/Toast";

export default function Splash(props) {
  const { session, handleSession } = props;
  // setModal

  // function renderToasts() {
  //   // if (session.experience.darkMode) {
  //   console.log("renderToasts");
  //   return (
  //     <Toast
  //       message="Dark Mode is enabled based on your browser settings."
  //       icon="bi-moon-stars-fill"
  //       title="Advcte"
  //       time="just now"
  //       delay="10000"
  //       autoHide="true"
  //     />
  //   );
  //   // }
  // }

  return (
    <div
      className={`splash-container text-center ${
        session.experience.darkMode ? "bg-sunset text-white" : ""
      }`}
    >
      {/* <div
        aria-live="polite"
        aria-atomic="true"
        style={{ position: "relative", minHeight: "200px" }}
      >
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          {renderToasts}
        </div>
      </div> */}
      <div className="form-signin">
        <form className="text-center form-signin">
          <Logo logoClass="logo-large" />
          <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

          <div className="form-floating">
            <input
              type="email"
              className={`form-control ${
                session.experience.darkMode
                  ? "form-control-dark text-white"
                  : ""
              }`}
              id="floatingInput"
              placeholder="myname"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className={`form-control ${
                session.experience.darkMode
                  ? "form-control-dark text-white"
                  : ""
              }`}
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
                className={session.experience.darkMode ? "text-white" : ""}
              />
              &nbsp; Remember me
            </label>
          </div>
          <button
            id="splash-signin"
            className={`w-100 btn btn-lg ${
              session.experience.darkMode ? "btn-dark" : "btn-primary"
            }`}
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
