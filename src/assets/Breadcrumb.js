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
        className={`${page === crumb ? "" : ""}`}
        aria-current={page === crumb ? "page" : ""}
      >
        <button
          id={`breadcrumb-${crumb}`}
          className={`btn hover-blue ${
            page === crumb ? "active bc-link" : ""
          } ${session.experience.darkMode ? "text-light" : "text-dark"}`}
          onClick={handleClick}
          style={{ outline: "none" }}
        >
          {crumb}
        </button>
      </li>
    );
  });

  return (
    <div aria-label="breadcrumb">
      <ol
        className={`bc rounded shadow ${
          session.experience.darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        {renderCrumbs}
      </ol>
    </div>
  );
}
