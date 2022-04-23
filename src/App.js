import React from "react";

// Layout Sections Import //
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

// Pages import //
import Home from "./pages/Home";

export default function App() {
  // State to hold session details for the user. //
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
  const [page, setPage] = React.useState("home");
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
    } else if (event.target.id === "header-logout-link") {
      // Logout //
      setSession((sessionObj) => ({
        ...sessionObj,
        loggedOn: false,
      }));
    } else if (event.target.id === "splash-signin") {
      // Login //
      setSession((sessionObj) => ({
        ...sessionObj,
        loggedOn: true,
      }));
    }
  }

  //// Rendering ////
  return (
    <div id="advcte" className="container-sm-12" style={{ height: "100%" }}>
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
      {session.loggedOn && (
        <Main page={page} setPage={setPage} session={session} />
      )}
      {session.loggedOn && <Footer session={session} />}
    </div>
  );
}
