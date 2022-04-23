import React from "react";
import Splash from "./sections/Splash";
import Header from "./sections/Header";

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
      roleId: null,
      rolePermissions: null,
      navId: null,
      navViews: null,
    },
  },
  experience: {
    language: "english",
    darkMode: true,
  },
});

export default function App() {
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

  //// Rendering ////
  return (
    <div id="advcte" className="container-md">
      {!session.loggedOn && (
        <Splash session={session} handleSession={handleSession} />
      )}

      {session.loggedOn && (
        <Header session={session} handleSession={handleSession} />
        // Placeholder
        // Placeholder
      )}
    </div>
  );
}

export { session, handleSession };
