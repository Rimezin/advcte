import React from "react";
import Logo from "./header/Logo";

export default function Header(props) {
  const { session, handleSession } = props;

  const navLinks = [
    {
      label: "Home",
      icon: "bi-house-fill",
      id: "header-nav-home",
      action: () => {
        alert("Home clicked");
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

  function renderMenuItems(itemsArray) {
    return itemsArray.map((link) => {
      return (
        <li>
          {link.divideAbove && <hr class="dropdown-divider" />}
          <button
            id={link.id}
            class="dropdown-item d-flex gap-2 align-items-center"
            onClick={link.action}
          >
            <i class={link.icon}></i>
            {link.label}
          </button>
        </li>
      );
    });
  }

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
        {/* Left Side Container */}
        <div class="dropdown">
          {/* Logo */}
          <a
            href="index.html"
            class={
              "d-flex align-items-center col-lg-4 mb-2 mb-lg-0 text-decoration-none dropdown-toggle" +
              (session.experience.darkMode ? " link-light" : " link-dark")
            }
            id="dropdownNavLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Logo session={session} />
          </a>

          {/* Left Dropdown Menu */}
          <ul
            class={
              "dropdown-menu mx-0 border-0 shadow" +
              (session.experience.darkMode ? " dropdown-menu-dark" : "")
            }
            aria-labelledby="dropdownNavLink"
          >
            {renderMenuItems(navLinks)}
          </ul>
        </div>

        {/* Right-Side Container */}
        <div class="d-flex align-items-center">
          {/* Search Box */}
          <form class="w-100 me-3">
            <input
              type="search"
              class={
                "form-control" +
                (session.experience.darkMode ? " form-control-dark" : "")
              }
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* Right-hand Profile Dropdown */}
          <div class="flex-shrink-0 dropdown">
            {/* Profile Icon + Arrow */}
            <a
              href="index.html"
              class={
                "d-block text-decoration-none dropdown-toggle" +
                (session.experience.darkMode ? " link-light" : " link-dark")
              }
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi-person-circle" style={{ fontSize: "32px" }}></i>
            </a>

            {/* Right Dropdown Items */}
            <ul
              class={
                "dropdown-menu mx-0 border-0 shadow" +
                (session.experience.darkMode ? " dropdown-menu-dark" : "")
              }
              aria-labelledby="dropdownUser2"
            >
              {renderMenuItems(profileLinks)}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
