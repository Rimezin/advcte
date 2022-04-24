import React from "react";
import Logo from "../assets/Logo";

export default function Header(props) {
  const { session, handleSession, setPage } = props;

  const navLinks = [
    {
      label: "Home",
      icon: "bi-house-fill",
      id: "header-nav-home",
      action: () => {
        setPage("home");
      },
      divideAbove: false,
    },
    {
      label: "Messages",
      icon: "bi-chat-dots-fill",
      id: "header-nav-chat",
      action: () => {
        alert("Messages clicked");
      },
      divideAbove: false,
    },
    {
      label: "Admin",
      icon: "bi-sliders",
      id: "header-nav-admin",
      action: () => {
        alert("Admin clicked");
      },
      divideAbove: true,
    },
  ];

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
      label: "Logout",
      icon: "bi-door-open",
      id: "header-logout-link",
      action: handleSession,
      divideAbove: true,
    },
  ];

  function renderMenuItems(itemsArray) {
    return itemsArray.map((link) => {
      return (
        <li>
          {link.divideAbove && <hr className="dropdown-divider" />}
          <button
            id={link.id}
            className="dropdown-item d-flex gap-2 align-items-center"
            onClick={link.action}
          >
            <i className={link.icon}></i>
            {link.label}
          </button>
        </li>
      );
    });
  }

  return (
    <header
      id="advcte-header"
      className={
        "py-3 mb-3" +
        (session.experience.darkMode
          ? " shadow-lg bg-dark text-white border-bottom-dark"
          : " shadow bg-light border-bottom")
      }
    >
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        {/* Left Side Container */}
        <div className="dropdown">
          {/* Logo */}
          <a
            href="index.html"
            className={
              "d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none hover-light" +
              (session.experience.darkMode ? " link-light" : " link-dark")
            }
            id="dropdownNavLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Logo logoClass="logo-medium" />
          </a>

          {/* Left Dropdown Menu */}
          <ul
            className={
              "dropdown-menu mx-0 border-0 shadow no-transition" +
              (session.experience.darkMode ? " dropdown-menu-dark" : "")
            }
            aria-labelledby="dropdownNavLink"
          >
            {renderMenuItems(navLinks)}
          </ul>
        </div>

        {/* Right-Side Container */}
        <div className="d-flex align-items-center">
          {/* Search Box */}
          <form className="w-100 me-3">
            <input
              type="search"
              className={
                "form-control" +
                (session.experience.darkMode ? " form-control-dark" : "")
              }
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* Right-hand Profile Dropdown */}
          <div className="flex-shrink-0 dropdown">
            {/* Profile Icon + Arrow */}
            <a
              href="index.html"
              className={
                "d-block text-decoration-none dropdown-toggle hover-blue" +
                (session.experience.darkMode ? " link-light" : " link-dark")
              }
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi-person-circle" style={{ fontSize: "32px" }}></i>
            </a>

            {/* Right Dropdown Items */}
            <ul
              className={
                "dropdown-menu mx-0 border-0 shadow dropdown-menu-end no-transition" +
                (session.experience.darkMode ? " dropdown-menu-dark" : "")
              }
              aria-labelledby="dropdownUser2"
            >
              {renderMenuItems(profileLinks)}
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          <button
            id="darkToggle"
            onClick={handleSession}
            className={
              "no-select hover-blue" +
              (session.experience.darkMode ? " text-white" : "")
            }
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <i
              className={
                session.experience.darkMode
                  ? "bi-sun-fill"
                  : "bi-moon-stars-fill"
              }
              style={{
                fontSize: "32px",
                pointerEvents: "none",
              }}
            ></i>
          </button>
        </div>
      </div>
    </header>
  );
}
