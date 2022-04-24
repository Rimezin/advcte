import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";

export default function Main(props) {
  const { session, page } = props;

  // Switch Page Function //
  function renderPage(param) {
    switch (param.toLowerCase()) {
      case "home":
        return <Home session={session} />;
      default:
        return <div className="col">Placeholder</div>;
    }
  }

  return (
    <main
      className={`row gx-0 ${
        session.experience.darkMode ? "bg-secondary text-white" : "bg-white"
      }`}
    >
      <ActionBar session={session} />
      {renderPage(page)}
    </main>
  );
}
