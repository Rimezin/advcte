import React from "react";

export default function Breadcrumb(props) {
  const { session, page } = props;

  function crumbs() {
    switch (page) {
      case "home":
        return ["home"];
      default:
        return ["home"];
    }
  }

  const renderCrumbs = crumbs().map((crumb) => {
    return (
      <li
        className={`breadcrumb-item ${page === crumb ? "active" : ""} ${
          session.experience.darkMode ? "text-dark" : ""
        }`}
        aria-current={page === crumb ? "page" : ""}
      >
        {crumb}
      </li>
    );
  });

  return (
    <div aria-label="breadcrumb">
      <ol
        className={`breadcrumb m-2 p-2 rounded ${
          session.experience.darkMode ? "bg-secondary" : ""
        }`}
      >
        {renderCrumbs}
        {/* <li className="breadcrumb-item active" aria-current="page">
          Breadcrumb
        </li> */}
      </ol>
    </div>
  );
}
