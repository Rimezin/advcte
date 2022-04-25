import React from "react";
import Modal from "./assets/Modal";

// Layout Sections Import //
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

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
      darkMode:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false,
    },
  });

  // Watch for darkMode //
  React.useEffect(() => {
    const modeMe = (e) => {
      setSession((session) => ({
        ...session,
        experience: {
          ...session.experience,
          darkMode: e.matches ? true : false,
        },
      }));
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeListener(modeMe);
  }, []);

  // State to hold current page in main content //
  const [page, setPage] = React.useState("home");

  // State to hold modal properties //
  const [modal, setModal] = React.useState({
    title: "Title goes here",
    content: <p>A cool message here.</p>,
    button1: {
      label: "Confirm",
      id: "modal-confirm",
      action: null,
    },
    button2: {
      label: "Cancel",
      id: "modal-cancel",
      action: null,
    },
    static: true,
    scrollable: false,
  });

  //   // Toast //
  //   const [toast, setToast] = React.useState(false);

  //   {/* Toast */}
  //   <Toast
  //   toast={toast}
  //   setToast={setToast}
  //   message=""
  //   icon=""
  //   title=""
  //   time=""
  // />

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
    } else if (
      event.target.id === "header-logout-link" ||
      event.target.id === "modal-logout-confirm"
    ) {
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
      {/* Modal */}
      <Modal modal={modal} session={session} />

      {/* Splash Page */}
      {!session.loggedOn && (
        <Splash
          session={session}
          handleSession={handleSession}
          setModal={setModal}
        />
      )}

      {/* Logged-in Items */}
      {session.loggedOn && (
        <Header
          session={session}
          handleSession={handleSession}
          setPage={setPage}
          setModal={setModal}
        />
      )}
      {session.loggedOn && (
        <Main
          page={page}
          setPage={setPage}
          session={session}
          setModal={setModal}
        />
      )}
      {session.loggedOn && <Footer session={session} setModal={setModal} />}
    </div>
  );
}
