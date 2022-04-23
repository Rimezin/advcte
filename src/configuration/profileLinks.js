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

export default profileLinks;
