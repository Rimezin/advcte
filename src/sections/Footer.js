import React from "react";
import Logo from "../assets/Logo";

export default function Footer(props) {
  const { session } = props;
  return (
    <div className="container-sm-12 footer">
      <footer
        className={
          "d-flex flex-wrap justify-content-between align-items-center gap-3 py-3 my-4 border-top shadow-top" +
          (session.experience.darkMode ? " bg-dark text-white" : " bg-light")
        }
      >
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
            <a
              className="text-muted"
              href="https://github.com/Rimezin/advcte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
