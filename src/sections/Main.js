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
        return <div>Placeholder</div>;
    }
  }

  return (
    <main
      className={
        session.experience.darkMode ? "bg-secondary text-white" : "bg-white"
      }
    >
      {session.loggedOn && <ActionBar session={session} />}
      {session.loggedOn && renderPage(page)}
    </main>
  );
}
