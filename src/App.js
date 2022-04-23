import React from "react";
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

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
      darkMode: false,
    },
  });

  //// Functions ////

  // Handle the session //
  function handleSession() {
    setSession(!session);
  }

  //// Rendering ////
  return (
    <div id="advcte" className="container-fluid">
      {/* Splash: Login Page, Password page, etc. */}
      {!session.loggedOn && (
        <Splash session={session} handleSession={handleSession} />
      )}

      {/* Non-splash */}
      {session.loggedOn && (
        <Header session={session} handleSession={handleSession} />
      )}
      {session.loggedOn && <Main session={session} />}
      {session.loggedOn && <Footer session={session} />}
    </div>
  );
}
