import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";
import Admin from "../pages/Admin";

// Main Render //
export default function Main(props) {
  const { session, page, setPage, setModal } = props;
  const [actions, setActions] = React.useState([]);

  // Actions Mapping //
  let renderActions = actions.map((action) => {
    return (
      <li>
        <button
          onClick={(event) => {
            event.preventDefault();
            action.action();
          }}
          className={`nav-link no-select ${
            session.experience.darkMode ? "link-light" : "link-dark"
          } hover-blue`}
        >
          <i
            className={`${action.icon} ${panel.expanded ? "" : "font-grow"}`}
          ></i>
          <span
            className={`${panel.expanded ? "" : "font-shrink"} no-select p-2`}
          >
            {action.label}
          </span>
        </button>
      </li>
    );
  });

  // Switch Page Function //
  function renderPage(param) {
    switch (param.toLowerCase()) {
      case "admin":
        return (
          <Admin
            session={session}
            setActions={setActions}
            setPage={setPage}
            setModal={setModal}
          />
        );
      default:
        return (
          <Home
            session={session}
            setActions={setActions}
            setPage={setPage}
            setModal={setModal}
          />
        );
    }
  }

  return (
    <main
      className={`row gx-0 transition-25 ${
        session.experience.darkMode ? "bg-secondary text-white" : "bg-white"
      }`}
    >
      <ActionBar session={session} renderActions={renderActions} />
      {renderPage(page)}
    </main>
  );
}
