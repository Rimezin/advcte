import React from "react";
import FormFactory from "../configuration/FormFactory";

export default function Settings(props) {
  const { session, formDesign, handleToast } = props;
  const [formData, setFormData] = React.useState({
    is_darkmode: true,
  });

  // Button Functions //
  function handleCancel() {
    alert("Cancelled!");
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleToast({
      title: "Settings Saved!",
      icon: "bi-gear-fill",
      message: "You have successfully saved your settings!",
    });
    // Submit to api
    console.log(formData);
  }

  // Settings rendering //
  let settingsContent = () => {
    return (
      <div id="settings-content" className="container-fluid">
        <FormFactory
          formDesign={formDesign}
          session={session}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    );
  };

  // Button 2 (Secondary) //
  let button2 = () => {
    return (
      <button
        type="button"
        id="settings-modal-button-2"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={handleCancel}
      >
        Cancel
      </button>
    );
  };

  // Button 1 (Primary) //
  let button1 = () => {
    return (
      <button
        type="button"
        id="settings-modal-button-1"
        class="btn btn-primary"
        data-bs-dismiss="modal"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    );
  };

  // Main rendering //
  return (
    <div
      id="settings-modal"
      class="transition-25 modal fade"
      tabindex="-1"
      data-bs-backdrop="static"
    >
      <div class={`modal-dialog modal-xl modal-dialog-scrollable`}>
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
            <h5 class="modal-title">{session.user.firstName}'s Settings</h5>
            <button
              type="button"
              class={`btn-close ${
                session.experience.darkMode
                  ? "text-white!important hover-blue!important"
                  : ""
              }`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{settingsContent()}</div>
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
            {button2()}
            {button1()}
          </div>
        </div>
      </div>
    </div>
  );
}
