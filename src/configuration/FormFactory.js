import React from "react";
import { nanoid } from "nanoid";

// Form Elements //
import Password from "./form_elements/Password";
import Email from "./form_elements/Email";
import { File, MultiFile } from "./form_elements/File";
import Text from "./form_elements/Text";
import Memo from "./form_elements/Memo";
import TextArea from "./form_elements/TextArea";
import PlainText from "./form_elements/PlainText";
import Color from "./form_elements/Color";
import DataList from "./form_elements/DataList";
import { Select, MultiSelect } from "./form_elements/Select";
import Checkbox from "./form_elements/Checkbox";
import { Checklist, InlineChecklist } from "./form_elements/Checklist";
import { Radio, InlineRadio } from "./form_elements/Radio";
import Switch from "./form_elements/Switch";
import { Toggle, InlineToggle } from "./form_elements/Toggle";
// import Range from "./FormElements/Range";
// import Steps from "./FormElements/Steps";

// Default Render //
export default function FormFactory(props) {
  const { formArray, session } = props;

  // Types //
  /*
        text - a simple string
        email - a string expected in email format
        password - a string rendered as dots
        file - a file upload
            > multifile - more than one file upload
        textarea - rendered as a special dom tag <textarea>
        plaintext - rendered string without form look
        color - color picker
        datalist - (uses options) a type-in selector of options
        select - (uses options) a dropdown to pick single option
            > multiselect - (uses options) a dropdown to pick more than one selection
        checkbox - a single true or false
        checklist - (uses options) a list of options that are either true or false
            > inlinechecklist - (uses options) renders options on the same line
        radio - (uses options) a list of options, but only one can be selected
            > inlineradio - (uses options) renders radio options in one line
        switch - a flip-flip style toggle that returns true or false (technically a checkbox)
        toggle - (uses options) a button-style form of radio buttons
            > inlinetoggle - (uses options) renders toggles in a line
        range - a slider to select a value from 0-100
        steps - (uses objectified options) a stepped-slider
            options: min, max, step (percent of whole integer)
        

    */
  const deObjArray = Object.values(formArray)[0];

  const renderForm = deObjArray.map((formElement) => {
    // Add formElementId //
    formElement.formElementId = nanoid();
    // Determine formElement rendering //
    switch (formElement.type) {
      // PASSWORD //
      case "password":
        return <Password session={session} formElement={formElement} />;
      case "email":
        return <Email session={session} formElement={formElement} />;
      case "file":
        return <File session={session} formElement={formElement} />;
      case "multifile":
        return <MultiFile session={session} formElement={formElement} />;
      case "memo":
        return <Memo session={session} formElement={formElement} />;
      case "textarea":
        return <TextArea session={session} formElement={formElement} />;
      case "plaintext":
        return <PlainText session={session} formElement={formElement} />;
      case "color":
        return <Color session={session} formElement={formElement} />;
      case "datalist":
        return <DataList session={session} formElement={formElement} />;
      case "select":
        return <Select session={session} formElement={formElement} />;
      case "multiselect":
        return <MultiSelect session={session} formElement={formElement} />;
      case "checkbox":
        return <Checkbox session={session} formElement={formElement} />;
      case "checklist":
        return <Checklist session={session} formElement={formElement} />;
      case "inlinechecklist":
        return <InlineChecklist session={session} formElement={formElement} />;
      case "radio":
        return <Radio session={session} formElement={formElement} />;
      case "inlineradio":
        return <InlineRadio session={session} formElement={formElement} />;
      case "switch":
        return <Switch session={session} formElement={formElement} />;
      case "toggle":
        return <Toggle session={session} formElement={formElement} />;
      case "inlinetoggle":
        return <InlineToggle session={session} formElement={formElement} />;
      // case "range":
      //   return <Range session={session} formElement={formElement} />;
      // case "steps":
      //   return <Steps session={session} formElement={formElement} />;
      default:
        return <Text session={session} formElement={formElement} />;
    }
  });

  return (
    <form
      className="form needs-validation row g-3"
      autocomplete="off"
      novalidate
    >
      {renderForm}
    </form>
  );
}
