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

export default navLinks;
