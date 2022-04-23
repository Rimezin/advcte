import React from "react";
import Splash from "./sections/Splash";
import Header from "./sections/Header";

export default function App() {
  //// Master States ////
  /* session: [object] Holds session details for the user.
   */
  const [session, setSession] = React.useState({
    loggedOn: true,
    user: {
      firstName: null,
      lastName: null,
      fullName: (firstName, lastName) => {
        if (firstName === null || lastName === null) {
          return null;
        } else {
          return `${firstName} ${lastName}`;
        }
      },
      userName: null,
      userId: null,
      security: {
        role: null,
        view: null,
      },
    },
    experience: {
      language: "english",
      darkMode: true,
    },
  });

  //// Functions ////

  // Handle the session //
  function handleSession() {
    setSession(!session);
  }

  // Render the main components //
  function renderPage() {
    if (!session.loggedOn) {
      return <Splash session={session} handleSession={handleSession} />;
    } else {
      return <Header session={session} handleSession={handleSession} />;
    }
  }

  //// Rendering ////
  return (
    <div id="advcte" className="container-fluid">
      {renderPage}
    </div>
  );
}
