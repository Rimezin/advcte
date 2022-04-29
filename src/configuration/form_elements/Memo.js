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
      style={{ color: "black" }}
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
