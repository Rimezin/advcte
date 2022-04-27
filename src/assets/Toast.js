import React from "react";

export default function Toast(props) {
  const { toast, setToast, session } = props;

  // const testObj = {
  //   title: "Splash Toast",
  //   icon: "bi-moon-stars-fill",
  //   message: "This is a splash toast!",
  //   delay: 8000,
  // };

  // React.useState(() => {
  //   handleToast(testObj);
  // }, [handleToast]);

  function handleClose(event) {
    event.preventDefault();
    setToast((toast) => ({
      ...toast,
      show: false,
    }));
  }

  return (
    <div
      className={`toast fade m-3 ${toast.show ? "show" : ""} ${
        session.experience.darkMode ? "bg-medium-dark text-white" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div
        className={`toast-header ${
          session.experience.darkMode ? "bg-dark text-light" : ""
        }`}
      >
        <i className={toast.icon}></i>
        <strong className="mr-auto">{toast.title}</strong>
        <small>just now</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          aria-label="Close"
          onClick={handleClose}
          style={{
            border: "none",
            backgroundColor: "none",
            float: "right",
          }}
        >
          <i
            className={`bi-times no-select ${
              session.experience.darkMode ? "text-light" : ""
            } hover-blue`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="toast-body">{toast.message}</div>
    </div>
  );
}
