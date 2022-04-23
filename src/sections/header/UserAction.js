import React from "react";

export default function UserAction(props) {
  //const { session } = props;

  return (
    <div id="advcte-header-useraction" className="col-2 border">
      <div class="dropdown">
        <a
          href="index.html"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a class="dropdown-item" href="index.html">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="index.html">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="index.html">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="index.html">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
