import React from "react";
import Logo from "../assets/Logo";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="index.html"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <Logo logoClass="logo-small" />
          </a>
          <span className="text-muted">© 2022 Advcte</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="index.html">
              <i className="bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="index.html">
              <i className="bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="index.html">
              <i className="bi-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
