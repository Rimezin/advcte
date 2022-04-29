import React from "react";
import FormFactory from "../configuration/FormFactory";
import fd_settings from "../configuration/form_designs/fd_settings";

export default function Settings(props) {
  const { session } = props;
  const [formData, setFormData] = React.useState();

  // Push data to state function //
  function pushFormData(object) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [object.name]:
          object.type === "checkbox" || object.type === "radio"
            ? object.checked
            : object.value,
      };
    });
  }

  // Set the initial formData state based on form design //
  React.useEffect(() => {
    // Grab design and convert to array of JSX objects
    const deObjArray = Object.values(fd_settings)[0];
    for (let a = 0; a < deObjArray.length; a++) {
      var thisObject = deObjArray[a];
      pushFormData(thisObject);
    }
  }, [setFormData]);

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
    // Submit to api
    console.log(formData);
  }

  // Settings rendering //
  let settingsContent = () => {
    return (
      <div id="settings-content" className="container-fluid">
        <FormFactory
          formArray={fd_settings}
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
