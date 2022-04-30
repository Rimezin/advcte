import React from "react";

export default function DarkModeButton(props) {
  const { session, handleDark } = props;

  return (
    <button
      id="darkToggle"
      onClick={handleDark}
      className={
        "no-select hover-blue transition-25" +
        (session.experience.darkMode ? " text-white" : "")
      }
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
    >
      <i
        className={`transition-25 
          ${session.experience.darkMode ? "bi-sun-fill" : "bi-moon-stars-fill"}
        `}
        style={{
          fontSize: "32px",
          pointerEvents: "none",
        }}
      ></i>
    </button>
  );
}
