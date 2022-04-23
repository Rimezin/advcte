import React from "react";

// Pages import //
import Home from "./pages/Home";

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

  return <main>{session.loggedOn && renderPage(page)}</main>;
}
