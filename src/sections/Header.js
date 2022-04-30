import React from "react";
import Logo from "../assets/Logo";
// import DarkModeButton from "../assets/DarkModeButton.js";

export default function Header(props) {
  const { session, handleSession, setPage, setModal } = props;

  const navLinks = [
    {
      label: "Home",
      icon: "bi-house-fill",
      id: "header-nav-home",
      action: () => {
        setPage("home");
      },
      divideAbove: false,
      bsToggle: null,
      bsTarget: null,
    },
    {
      label: "Messages",
      icon: "bi-chat-dots-fill",
      id: "header-nav-chat",
      action: () => {
        alert("Messages clicked");
      },
      divideAbove: false,
      bsToggle: null,
      bsTarget: null,
    },
    {
      label: "Admin",
      icon: "bi-sliders",
      id: "header-nav-admin",
      action: () => {
        alert("Admin clicked");
      },
      divideAbove: true,
      bsToggle: null,
      bsTarget: null,
    },
  ];

  const profileLinks = [
    {
      label: "Profile",
      icon: "bi-person-badge-fill",
      id: "header-profile-link",
      action: null,
      divideAbove: false,
      bsToggle: "modal",
      bsTarget: "#profile-modal",
    },
    {
      label: "Settings",
      icon: "bi-gear-fill",
      id: "header-settings-link",
      action: null,
      divideAbove: false,
      bsToggle: "modal",
      bsTarget: "#settings-modal",
    },
    {
      label: "Logout",
      icon: "bi-door-open",
      id: "header-logout-modal",
      action: () => {
        setModal({
          title: "Logout?",
          content: (
            <p>
              Are you sure you want to log-out? You may lose any unsaved
              changes.
            </p>
          ),
          button1: {
            label: "Confirm",
            id: "modal-logout-confirm",
            action: handleSession,
          },
          button2: {
            label: "Cancel",
            id: "modal-logout-cancel",
            action: null,
          },
          static: true,
          scrollable: false,
        });
      },
      divideAbove: true,
      bsToggle: "modal",
      bsTarget: "#advcte-modal",
    },
  ];

  function renderMenuItems(itemsArray) {
    return itemsArray.map((link) => {
      return (
        <li>
          {link.divideAbove && <hr className="dropdown-divider" />}
          <button
            id={link.id}
            className="dropdown-item d-flex gap-2 align-items-center transition-25"
            onClick={link.action !== null ? link.action : ""}
            data-bs-toggle={link.bsToggle} //For modals
            data-bs-target={link.bsTarget} //For modal id: "#advcte-modal"
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
      className={`mb-3 transition-25 ${
        session.experience.darkMode
          ? "shadow-lg bg-dark text-white border-bottom-dark"
          : "shadow bg-light border-bottom"
      }`}
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
              "transition-25 d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none hover-light" +
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
                "transition-25 d-block text-decoration-none dropdown-toggle hover-blue" +
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
                "transition-25 dropdown-menu mx-0 border-0 shadow dropdown-menu-end no-transition" +
                (session.experience.darkMode ? " dropdown-menu-dark" : "")
              }
              aria-labelledby="dropdownUser2"
            >
              {renderMenuItems(profileLinks)}
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          {/* <DarkModeButton session={session} handleSession={handleSession} /> */}
        </div>
      </div>
    </header>
  );
}
