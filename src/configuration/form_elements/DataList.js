import React from "react";

export default function DataList(props) {
  const { formElement, session } = props;

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

  function renderOptions() {
    const fieldOptions = formElement.options.map((option) => {
      return <option value={option} />;
    });
    return fieldOptions;
  }

  return (
    <div
      className={`col${
        formElement.layout.width === 12
          ? "-12"
          : `-md-${formElement.layout.width}`
      } ${formElement.layout.floating ? "form-floating" : ""}`}
    >
      <label for={formElement.formElementId} className="form-label">
        {formElement.label}
      </label>
      {formElement.instructions && (
        <div id={`ins_${formElement.formElementId}`} className="form-text">
          {formElement.instructions}
        </div>
      )}
      <input
        list={`datalist_${formElement.formElementId}`}
        id={formElement.formElementId}
        className={`form-control ${
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
      <datalist id={`datalist_${formElement.formElementId}`}>
        {renderOptions}
      </datalist>
      {formElement.feedback.show && (
        <div
          className={`${
            formElement.feedback.isValid ? "valid" : "invalid"
          }-feedback`}
        >
          {`${
            formElement.feedback.isValid
              ? formElement.feedback.valid
              : formElement.feedback.invalid
          }-feedback`}
        </div>
      )}
    </div>
  );
}
