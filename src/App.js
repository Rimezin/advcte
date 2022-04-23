import React from "react";
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import SubHeader from "./sections/SubHeader";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

export default function App() {
  //// Master States ////
  /* session: [object] Holds session details for the user.
   */
  const [session, setSession] = React.useState({
    loggedOn: false,
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
    <div id="advcte" className="container">
      {/* Splash: Login Page, Password page, etc. */}
      <Splash session={session} handleSession={handleSession} />

      {/* Header: logo, menu, user info */}
      <Header session={session} handleSession={handleSession} />

      {/* Sub-header: nav buttons, breadcrumb */}
      <SubHeader session={session} />

      {/* Main Section: action bar & main content */}
      <Main session={session} />

      {/* Footer: Chat & Status Bar */}
      <Footer session={session} />
    </div>
  );
}
