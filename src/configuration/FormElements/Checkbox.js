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

export default function Checkbox(props) {
  const { formElement, session } = props;

  return (
    <div
      className={`col${
        formElement.layout.width === 12
          ? "-12"
          : `-md-${formElement.layout.width}`
      } ${formElement.layout.floating ? "form-floating" : ""} form-check`}
    >
      <input
        type="checkbox"
        id={formElement.formElementId}
        className={`form-check-input ${
          session.experience.darkMode ? "form-control-dark" : ""
        }`}
        aria-describedby={`ins_${formElement.formElementId}`}
        placeholder={formElement.placeholder}
        dirty={formElement.dirty}
        name={formElement.name}
        required={formElement.required}
        disabled={formElement.disabled}
        readonly={formElement.readOnly}
        onClick={formElement.onClick()}
        onChange={formElement.onChange()}
      />
      <label for={formElement.formElementId} className="form-label">
        {formElement.label}
      </label>
    </div>
  );
}