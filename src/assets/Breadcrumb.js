import React from "react";

export default function Breadcrumb(props) {
  const { session, page, setPage } = props;

  function crumbs() {
    switch (page) {
      case "home":
        return ["home"];
      case "admin":
        return ["home", "admin"];
      default:
        return ["home"];
    }
  }

  function handleClick(event) {
    event.preventDefault();
    let dest = event.target.id;
    dest = dest.substring(11);
    setPage(dest);
  }

  const renderCrumbs = crumbs().map((crumb) => {
    return (
      <li
        className={`breadcrumb-item ${
          page === crumb ? "active disabled" : ""
        } ${session.experience.darkMode ? "text-dark" : ""}`}
        aria-current={page === crumb ? "page" : ""}
      >
        <button
          id={`breadcrumb-${crumb}`}
          className="btn hover-blue"
          onClick={handleClick}
        >
          {crumb}
        </button>
      </li>
    );
  });

  return (
    <div aria-label="breadcrumb">
      <ol
        className={`breadcrumb rounded shadow ${
          session.experience.darkMode ? "bg-secondary" : "bg-white"
        }`}
      >
        {renderCrumbs}
      </ol>
    </div>
  );
}
