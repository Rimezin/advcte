import React from "react";
import Logo from "./header/Logo";

export default function Header(props) {
  const { session, handleSession } = props;

  return (
    <header id="advcte-header" class="py-3 mb-3 border-bottom">
      <div
        class="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        {/* Logo & Main Menu */}
        <div class="dropdown">
          <a
            href="index.html"
            class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle"
            id="dropdownNavLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Logo session={session} />
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownNavLink"
          >
            <li>
              <a
                class="dropdown-item active"
                href="index.html"
                aria-current="page"
              >
                Overview
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="index.html">
                Inventory
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="index.html">
                Customers
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="index.html">
                Products
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="index.html">
                Reports
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="index.html">
                Analytics
              </a>
            </li>
          </ul>
        </div>

        <div class="d-flex align-items-center">
          <form class="w-100 me-3">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="flex-shrink-0 dropdown">
            <a
              href="index.html"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul
              class="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
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
              {/* Dark Mode Toggle */}
              <li>
                <div class="dropdown-item form-check form-switch">
                  <label class="form-check-label" for="darkToggle">
                    {session.experience.darkMode ? "Light Mode" : "Dark Mode"}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="darkToggle"
                    onClick={handleSession}
                  />
                </div>
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
      </div>
    </header>
  );
}
