import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";
import Admin from "../pages/Admin";

// Main Render //
export default function Main(props) {
  const { session, page, setPage, setModal } = props;
  const [actions, setActions] = React.useState([]);

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
      <ActionBar session={session} actions={actions} />
      {renderPage(page)}
    </main>
  );
}
