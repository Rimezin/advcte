import React from "react";
import Modal from "./assets/Modal";
import Toast from "./assets/Toast";

// Layout Sections Import //
import Splash from "./sections/Splash";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Profile from "./sections/Profile";
import Settings from "./sections/Settings";

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

  //const constHandleToast = React.useCallback(handleToast);

  ///////////////////////////////////////////////
  ////////////////// DARK MODE //////////////////
  ///////////////////////////////////////////////
  /*const darkToast = {
    title: `${!session.experience.darkMode ? "Dark" : "Light"} Mode Activated`,
    icon: `bi-${!session.experience.darkMode ? "moon-stars" : "sun"}-fill`,
    message: `${
      !session.experience.darkMode ? "Dark" : "Light"
    } mode was activated based on your browser settings.`,
    delay: 8000,
  };

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
  
  */

  ///////////////////////////////////////////////

  // State to hold current page in main content //
  const [page, setPage] = React.useState("home");

  ////////////////////////////////////
  //////// MODALS ////////////////////
  ////////////////////////////////////
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

  ////////////////////////////////////
  ///////// FORM DESIGNS /////////////
  ////////////////////////////////////

  //// Profile Form Design ////
  const fd_profile = [
    {
      name: "first_name",
      label: "First Name",
      placeholder: "John",
      type: "text",
      instructions: "Please provide your first name",
      disabled: false,
      required: true,
      dirty: false,
      value: null,
      checked: false,
      layout: {
        size: "default",
        width: 3,
      },
      onClick: function () {
        // NOTHING
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: {
        show: false,
        isValid: false,
        valid: "Looks good!",
        invalid: "Please enter a first name.",
      },
    },
    {
      name: "last_name",
      label: "Last Name",
      placeholder: "Smith",
      type: "text",
      instructions: "Please provide your last name",
      disabled: false,
      required: true,
      dirty: false,
      value: null,
      checked: false,
      layout: {
        size: "default",
        width: 3,
      },
      onClick: function () {
        // NOTHING
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: {
        show: false,
        isValid: false,
        valid: "Looks good!",
        invalid: "Please enter a last name.",
      },
    },
    {
      name: "username",
      label: "Username",
      placeholder: "Username",
      type: "text",
      instructions: "Configured by the Administrator.",
      disabled: true,
      required: false,
      dirty: false,
      value: null,
      checked: false,
      layout: {
        size: "default",
        width: 3,
      },
      onClick: function () {
        // NOTHING
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: {
        show: false,
        isValid: false,
        valid: "Looks good!",
        invalid: "Please enter a last name.",
      },
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
      instructions: "Choose something strong!",
      disabled: false,
      required: true,
      dirty: false,
      value: null,
      checked: false,
      layout: {
        size: "default",
        width: 3,
      },
      onClick: function () {
        // NOTHING
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: {
        show: false,
        isValid: false,
        valid: "Looks good!",
        invalid: "Please enter a valid password.",
      },
    },
    {
      name: "profile_description",
      label: "Describe Yourself",
      placeholder: "Type some words here...",
      type: "textarea",
      instructions: "Tell us about your favorite things.",
      disabled: false,
      required: true,
      dirty: false,
      value: null,
      checked: false,
      layout: {
        size: "default",
        width: 12,
      },
      onClick: function () {
        // NOTHING
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: {
        show: false,
        isValid: false,
        valid: "Looks good!",
        invalid: "Please provide some details.",
      },
    },
  ];

  //// Settings Form Design ////
  const fd_settings = [
    {
      name: "is_darkmode",
      label: "Dark Mode",
      placeholder: null,
      type: "switch",
      instructions: null,
      disabled: false,
      required: false,
      dirty: false,
      value: true,
      checked: session.experience.darkMode ? true : false,
      layout: {
        size: "default",
        width: 3,
      },
      onClick: function () {
        //handleDark();
      },
      onChange: function () {
        // NOTHING
      },
      options: null,
      feedback: null,
    },
  ];

  ////////////////////////////////////
  ////////////////////////////////////

  // Handle session changes //
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

  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///////////    Main Rendering    /////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
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
        <Profile
          session={session}
          formDesign={fd_profile}
          handleToast={handleToast}
        />
      )}

      {session.loggedOn && (
        <Settings
          session={session}
          formDesign={fd_settings}
          handleToast={handleToast}
        />
      )}

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
