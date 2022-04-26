import React from "react";
import Logo from "../assets/Logo";
import Waves from "./splash/Waves";
import Birds from "./splash/Birds";
import DarkModeButton from "../assets/DarkModeButton";

export default function Splash(props) {
  const { session, handleSession } = props;
  // setModal

  return (
    <div
      className={`splash-container text-center transition-25 ${
        session.experience.darkMode ? "bg-sunset text-white" : ""
      }`}
    >
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
          <p
            className={`mt-5 mb-3 ${
              session.experience.darkMode ? "text-white" : "text-muted"
            }`}
          >
            Under Development
          </p>
        </form>
      </div>
      <Birds session={session} />
      <Waves session={session} />
      <div
        className="m-3 transition-25"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
        }}
      >
        <DarkModeButton session={session} handleSession={handleSession} />
      </div>
    </div>
  );
}
