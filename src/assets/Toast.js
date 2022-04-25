import React from "react";

export default function Toast(props) {
  const { message, icon, title, time, delay, autoHide } = props;

  return (
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay={delay}
      data-autohide={autoHide}
    >
      <div class="toast-header">
        <i class={icon}></i>
        <strong class="mr-auto">{title}</strong>
        <small class="text-muted">{time}</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <i class="bi-times"></i>
        </button>
      </div>
      <div class="toast-body">{message}</div>
    </div>
  );
}
