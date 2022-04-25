import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";

export default function Main(props) {
  const { session, page } = props;
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
      case "home":
        return <Home session={session} setActions={setActions} />;
      default:
        return <div className="col">Placeholder</div>;
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
