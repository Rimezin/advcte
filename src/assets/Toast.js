import React from "react";

export default function Toast() {
  return (
    <div
      className="toast fade m-3 show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        border: "none",
        backgroundColor: "none",
        float: "right",
      }}
    >
      <div className="toast-header">
        <i className="bi-question-circle"></i>
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </div>
  );
}
