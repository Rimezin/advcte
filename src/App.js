import React from "react";
import Modal from "./assets/Modal";
import Toast from "./assets/Toast";

// Layout Sections Import //
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Profile from "./sections/Profile";

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

  // Handle Dark Toggles //
  // function handleDark() {
  //   setSession((sessionObj) => ({
  //     ...sessionObj,
  //     experience: {
  //       ...sessionObj.experience,
  //       darkMode: !sessionObj.experience.darkMode,
  //     },
  //   }));
  // }

  // State for toast - default false to hide //
  const [toast, setToast] = React.useState({
    show: false,
    title: "Advcte",
    icon: "bi-question-circle",
    message: "This is the default toast message.",
  });

  function handleToast(toastObj) {
    setToast({
      show: true,
      title: toastObj.title,
      icon: toastObj.icon,
      message: toastObj.message,
    });

    // Hide after delay //
    setTimeout(() => {
      setToast((toast) => ({
        ...toast,
        show: false,
      }));
    }, toastObj.delay);
  }

  const darkToast = {
    title: `${!session.experience.darkMode ? "Dark" : "Light"} Mode Activated`,
    icon: `bi-${!session.experience.darkMode ? "moon-stars" : "sun"}-fill`,
    message: `${
      !session.experience.darkMode ? "Dark" : "Light"
    } mode was activated based on your browser settings.`,
    delay: 8000,
  };

  const constHandleToast = React.useCallback(handleToast);

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
      // Show transition in a toast //
      handleToast(darkToast);
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", () => {});
  }, [constHandleToast, darkToast]);

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

  // Profile State //
  // const [profile, setProfile] = React.useState(false);

  //// Rendering ////
  return (
    <div id="advcte" className="container-sm-12" style={{ height: "100%" }}>
      {/* Modal */}
      <Modal modal={modal} session={session} />

      {/* Toast */}
      <div
        id="toastContainer"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          zIndex: toast.show ? "999" : "-999",
          transition: "0.25s",
        }}
      >
        <Toast toast={toast} session={session} setToast={setToast} />
      </div>

      {/* Profile */}
      {session.loggedOn && <Profile session={session} />}

      {/* Settings */}
      {session.loggedOn && <Settings session={session} />}

      {/* Splash Page */}
      {!session.loggedOn && (
        <Splash
          session={session}
          handleSession={handleSession}
          setModal={setModal}
          handleToast={handleToast}
        />
      )}

      {/* Logged-in Items */}
      {session.loggedOn && (
        <Header
          session={session}
          handleSession={handleSession}
          setPage={setPage}
          setModal={setModal}
          // setProfile={setProfile}
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
