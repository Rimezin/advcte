import React from "react";
import Logo from "./header/Logo";

export default function Header(props) {
  const { session, handleSession } = props;

  const profileLinks = [
    {
      label: "Profile",
      icon: "bi-person-badge-fill",
      id: "header-profile-link",
      action: () => {
        alert("Profile clicked");
      },
      divideAbove: false,
    },
    {
      label: "Settings",
      icon: "bi-gear-fill",
      id: "header-settings-link",
      action: () => {
        alert("Settings clicked");
      },
      divideAbove: false,
    },
    {
      label: session.experience.darkMode ? "Light Mode" : "Dark Mode",
      icon: session.experience.darkMode ? "bi-sun-fill" : "bi-moon-fill",
      id: "darkToggle",
      action: handleSession,
      divideAbove: false,
    },
    {
      label: "Logout",
      icon: "bi-door-open",
      id: "header-logout-link",
      action: () => {
        alert("Logged Out!");
      },
      divideAbove: true,
    },
  ];

  const renderProfileLinks = profileLinks.map((link) => {
    return (
      <li>
        {link.divideAbove && <hr class="dropdown-divider" />}
        <button
          id={link.id}
          class="dropdown-item d-flex gap-2 align-items-center"
          onClick={link.action}
          data-bs-auto-close="outside"
        >
          <i class={link.icon}></i>
          {link.label}
        </button>
      </li>
    );
  });

  return (
    <header
      id="advcte-header"
      class={
        "py-3 mb-3 border-bottom" +
        (session.experience.darkMode ? " bg-dark text-white" : "")
      }
    >
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
          {/* Search Box */}
          <form class="w-100 me-3">
            {/* <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            /> */}
          </form>

          {/* Right-hand Profile Dropdown */}
          <div class="flex-shrink-0 dropdown">
            <a
              href="index.html"
              class={
                "d-block text-decoration-none dropdown-toggle" +
                (session.experience.darkMode ? " link-dark" : " link-light")
              }
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi-person-circle" style={{ fontSize: "32px" }}></i>
            </a>
            <ul
              class={
                "dropdown-menu mx-0 border-0 shadow" +
                (session.experience.darkMode ? " dropdown-menu-dark" : "")
              }
              aria-labelledby="dropdownUser2"
            >
              {/* Profile Links from Array */}
              {renderProfileLinks}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
