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
            <button
              type="button"
              class={`"btn btn-secondary" ${
                modal.button2 === null ? "hidden" : ""
              }`}
              data-bs-dismiss="modal"
              onClick={
                modal.button2.action !== null ? modal.button2.action : ""
              }
            >
              {modal.button2.label}
            </button>
            <button
              type="button"
              class={`"btn btn-primary" ${
                modal.button1 === null ? "hidden" : ""
              }`}
              onClick={
                modal.button1.action !== null ? modal.button1.action : ""
              }
            >
              {modal.button1.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
