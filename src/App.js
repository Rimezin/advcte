import React from "react";

// Layout Sections Import //
import Splash from "./sections/Splash";
import Header from "./sections/Header";

// Pages import //
import Home from "./pages/Home";

export default function App() {
  // State to hold session details for the user. //
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
        roleId: null,
        rolePermissions: null,
        navId: null,
        navViews: null,
      },
    },
    experience: {
      language: "english",
      darkMode: false,
    },
  });

  // State to hold current page in main content //
  const [page, setPage] = React.useState("");
  //// Functions ////

  // Handle the session //
  function handleSession(event) {
    if (event.target.id === "darkToggle") {
      setSession((sessionObj) => ({
        ...sessionObj,
        experience: {
          ...sessionObj.experience,
          darkMode: !sessionObj.experience.darkMode,
        },
      }));
    }
  }

  // Switch Page Function //
  function switchPage(param) {
    switch (param) {
      case "home":
        return <Home session={session} />;
      default:
        return <div>Placeholder</div>;
    }
  }

  //// Rendering ////
  return (
    <div id="advcte" className="container-sm-12">
      {/* Splash Page */}
      {!session.loggedOn && (
        <Splash session={session} handleSession={handleSession} />
      )}

      {/* Logged-in Items */}
      {session.loggedOn && (
        <Header
          session={session}
          handleSession={handleSession}
          setPage={setPage}
        />
      )}
      {session.loggedOn && switchPage(page)}
    </div>
  );
}
