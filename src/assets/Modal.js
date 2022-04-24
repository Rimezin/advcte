import React from "react";

export default function Modal(props) {
  const { modal, session } = props;

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
        <div
          class={`modal-content ${
            session.experience.darkMode
              ? "bg-dark text-white"
              : "bg-light text-dark"
          }`}
        >
          <div
            class="modal-header"
            style={
              session.experience.darkMode
                ? {
                    borderBottom: "1px solid black",
                  }
                : {}
            }
          >
            <h5 class="modal-title">{modal.title}</h5>
            <button
              type="button"
              class={`btn-close ${
                session.experience.darkMode ? "text-white hover-blue" : ""
              }`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{modal.content}</div>
          <div
            class="modal-footer"
            style={
              session.experience.darkMode
                ? {
                    borderTop: "1px solid black",
                  }
                : {}
            }
          >
            <button
              type="button"
              id={modal.button2 !== null ? modal.button2.id : "modal-button-2"}
              class={`btn btn-secondary ${
                modal.button2 === null ? "hidden" : ""
              }`}
              data-bs-dismiss="modal"
              onClick={
                modal.button2.action !== null ? modal.button2.action : ""
              }
            >
              {modal.button2 !== null ? modal.button2.label : "Cancel"}
            </button>
            <button
              type="button"
              id={modal.button1 !== null ? modal.button1.id : "modal-button-1"}
              class={`btn btn-primary ${
                modal.button1 === null ? "hidden" : ""
              }`}
              onClick={
                modal.button1.action !== null ? modal.button1.action : ""
              }
            >
              {modal.button1 !== null ? modal.button1.label : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
