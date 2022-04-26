import React from "react";

export default function Breadcrumb(props) {
  const { session, page } = props;

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

  const renderCrumbs = crumbs().map((crumb) => {
    let crumbItem;
    if (page === crumb) {
      crumbItem = crumb;
    } else {
      crumbItem = () => <button className="btn btn-link">{crumb}</button>;
    }

    return (
      <li
        className={`breadcrumb-item ${page === crumb ? "active" : ""} ${
          session.experience.darkMode ? "text-dark" : ""
        }`}
        aria-current={page === crumb ? "page" : ""}
      >
        {crumbItem}
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
