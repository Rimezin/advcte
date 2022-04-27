import React from "react";

export default function Toast(props) {
  const { toast, setToast, session } = props;

  // setToast((toast) => ({
  //   show: true,
  //   title: event.target.ttitle,
  //   icon: event.target.ticon,
  //   message: event.target.tmessage,
  // }));

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
        session.experience.darkMode ? "bg-dark text-white" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <i className={toast.icon}></i>
        <strong className="mr-auto">{toast.title}</strong>
        <small>just now</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={handleClose}
          style={{
            border: "none",
            backgroundColor: "none",
            float: "right",
          }}
        >
          <i className="bi-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="toast-body">{toast.message}</div>
    </div>
  );
}
