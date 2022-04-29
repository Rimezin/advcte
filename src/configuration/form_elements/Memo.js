import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function Memo(props) {
  const { formElement } = props;
  //session
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div
      id={formElement.formElementId}
      className={`col${
        formElement.layout.width === 12
          ? "-12"
          : `-md-${formElement.layout.width}`
      }`}
    >
      <label for={formElement.formElementId} className="form-label">
        {formElement.label}
      </label>
      {formElement.instructions && (
        <div id={`ins_${formElement.formElementId}`} className="form-text">
          {formElement.instructions}
        </div>
      )}
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        name={formElement.name}
      />
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

//////////////////////////////////
/*
import React from "react";
import $ from "jquery";

export default function Memo(props) {*/
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
/*
  React.useEffect(() => {
    // $(`#${formElement.formElementId}`).summernote({
    $("#summernote").summernote({
      placeholder: formElement.placeholder,
      tabsize: 2,
      height: 100,
    });
  }, [formElement.formElementId, formElement.placeholder]);

  return (
    <textarea
      id="summernote"
      // id={formElement.formElementId}
      className={`form-control ${
        session.experience.darkMode ? "form-control-dark" : ""
      }`}
      aria-describedby={`ins_${formElement.formElementId}`}
      placeholder={formElement.placeholder}
      dirty={formElement.dirty}
    />
  );
}*/
