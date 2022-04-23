import React from "react";
import Logo from "../assets/Logo";

export default function Splash(props) {
  const { handleSession } = props;

  return (
    <form class="text-center form-signin">
      <Logo style={{ fontSize: "48px" }} />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        id="splash-signin"
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={handleSession}
      >
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">Under Development</p>
    </form>
  );
}
