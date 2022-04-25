import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";
import Admin from "../pages/Admin";

// Main Render //
export default function Main(props) {
  const { session, page, setPage } = props;
  const [actions, setActions] = React.useState([
    {
      label: "Placeholder",
      icon: "bi-info-circle",
      action: () => {
        alert("This is just a placeholder, settle down.");
      },
    },
  ]);

  // Switch Page Function //
  function renderPage(param) {
    switch (param.toLowerCase()) {
      case "admin":
        return <Admin session={session} setActions={setActions} page={page} />;
      default:
        return <Home session={session} setActions={setActions} page={page} />;
    }
  }

  return (
    <main
      className={`row gx-0 transition-25 ${
        session.experience.darkMode ? "bg-secondary text-white" : "bg-white"
      }`}
    >
      <ActionBar session={session} actions={actions} setPage={setPage} />
      {renderPage(page)}
    </main>
  );
}
