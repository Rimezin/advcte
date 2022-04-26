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
          className="btn btn-link"
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
        className={`breadcrumb p-2 rounded ${
          session.experience.darkMode ? "bg-secondary" : ""
        }`}
      >
        {renderCrumbs}
      </ol>
    </div>
  );
}
