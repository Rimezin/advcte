import React from "react";
import Logo from "../assets/Logo";

export default function Footer(props) {
  const { session } = props;
  return (
    <div className="container-sm-12 footer">
      <footer
        className={
          "d-flex flex-wrap justify-content-between align-items-center px-3 py-3 shadow-top" +
          (session.experience.darkMode
            ? " bg-dark text-white border-top-dark"
            : " bg-light border-top")
        }
      >
        <div className="col-md-4 d-flex align-items-center no-select">
          <button
            href="index.html"
            className="mb-3 me-2 mb-md-0 text-decoration-none lh-1 no-select"
          >
            <i className="bi-chat-dots-fill no-select"></i>
            Messages
          </button>
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
          <li className="ms-3">
            <span className="text-muted">© 2022 Advcte</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}
