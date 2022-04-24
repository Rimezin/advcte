import React from "react";

export default function Modal(props) {
  const { modal } = props;

  /* {
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
  }
*/

  function renderButton1() {
    if (modal.button1 !== null) {
      return (
        <button
          type="button"
          class="btn btn-primary"
          onClick={modal.button1.action !== null ? modal.button1.action : ""}
        >
          {modal.button1.label}
        </button>
      );
    } else {
      return;
    }
  }

  function renderButton2() {
    if (modal.button2 !== null) {
      return (
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={modal.button2.action !== null ? modal.button2.action : ""}
        >
          {modal.button2.label}
        </button>
      );
    } else {
      return;
    }
  }

  return (
    <div
      id="advcte-modal"
      class={`${
        modal.scrollable ? "modal-dialog modal-dialog-scrollable" : "modal fade"
      }`}
      tabindex="-1"
      data-bs-backdrop={modal.static ? "static" : ""}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{modal.title}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{modal.content}</div>
          <div class="modal-footer">
            {renderButton2}
            {renderButton1}
          </div>
        </div>
      </div>
    </div>
  );
}
