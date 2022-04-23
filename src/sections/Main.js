import React from "react";

export default function Main(props) {
  const { session } = props;

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
