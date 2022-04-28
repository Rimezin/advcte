import React from "react";

// Each formElement object should have: //
/*
  formElement = {
      name: "first_name",
      label: "First Name",
      placeholder: "John",
      type: "text",
      instructions: "Please provide your first name"
      disabled: false, // prevents pointer events
      readOnly: false, // prevents changing the value, but allows pointer events
      required: true, // will be checked by FormProcessing.js
      dirty: false, // toggles when modified
      layout: {
          size: "default" // or large, or small
          width: 3 // numerical value for bootstrap columns taken 1-12
          floating: true // placed the label in the field //
      }
      onClick: () => {
          alert('clicked!');
      },
      onChange: () => {
          alert('clicked!');
      },
      options: [  // set to null if no options
          option1,
          option2,
          option3,
      ],
      feedback: {
          show: false,
          isValid: false,
          valid: "Looks good!",
          invalid: "Please enter a name."
      }
*/

function Radio(props) {
  const { formElement, session } = props;

  function renderOptions() {
    const radioOptions = formElement.options.map((option) => {
      return (
        <div>
          <input
            type="radio"
            id={`${formElement.formElementId}_${formElement.options.indexOf(
              option
            )}`}
            className={`form-check-input ${
              session.experience.darkMode ? "form-control-dark" : ""
            }`}
            dirty={formElement.dirty}
            name={formElement.name}
            required={formElement.required}
            disabled={formElement.disabled}
            readonly={formElement.readOnly}
            onClick={formElement.onClick()}
            onChange={formElement.onChange()}
          />
          <label
            for={`${formElement.formElementId}_${formElement.options.indexOf(
              option
            )}`}
            className="form-check-label"
          >
            {option}
          </label>
        </div>
      );
    });
    return radioOptions;
  }

  return (
    <div
      className={`col${
        formElement.layout.width === 12
          ? "-12"
          : `-md-${formElement.layout.width}`
      } form-check`}
    >
      <label for={formElement.formElementId} className="form-label">
        {formElement.label}
      </label>
      {renderOptions}
    </div>
  );
}

function InlineRadio(props) {
  const { formElement, session } = props;

  function renderOptions() {
    const radioOptions = formElement.options.map((option) => {
      return (
        <div>
          <input
            type="radio"
            id={`${formElement.formElementId}_${formElement.options.indexOf(
              option
            )}`}
            className={`form-check-input ${
              session.experience.darkMode ? "form-control-dark" : ""
            }`}
            dirty={formElement.dirty}
            name={formElement.name}
            required={formElement.required}
            disabled={formElement.disabled}
            readonly={formElement.readOnly}
            onClick={formElement.onClick()}
            onChange={formElement.onChange()}
          />
          <label
            for={`${formElement.formElementId}_${formElement.options.indexOf(
              option
            )}`}
            className="form-check-label"
          >
            {option}
          </label>
        </div>
      );
    });
    return radioOptions;
  }

  return (
    <div
      className={`col${
        formElement.layout.width === 12
          ? "-12"
          : `-md-${formElement.layout.width}`
      } form-check form-check-inline`}
    >
      <label for={formElement.formElementId} className="form-label">
        {formElement.label}
      </label>
      {renderOptions}
    </div>
  );
}

export { Radio, InlineRadio };
