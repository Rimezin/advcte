import React from "react";

export default function Toast(props) {
  const { toast, session } = props;

  // const testObj = {
  //   title: "Splash Toast",
  //   icon: "bi-moon-stars-fill",
  //   message: "This is a splash toast!",
  //   delay: 8000,
  // };

  // React.useState(() => {
  //   handleToast(testObj);
  // }, [handleToast]);

  // function handleClose(event) {
  //   alert("clicked!");
  //   event.preventDefault();
  //   setToast((toast) => ({
  //     ...toast,
  //     show: false,
  //   }));
  // }

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
        <i className={toast.icon} style={{ marginRight: "10px" }}></i>
        <strong style={{ marginRight: "auto" }}>{toast.title}</strong>
        <small>just now</small>
        <button
          type="button"
          aria-label="Close"
          onClick={handleClose}
          style={{
            border: "none",
            background: "none",
          }}
        >
          <i
            className={`bi-x-square no-select ${
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
