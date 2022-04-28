import React from "react";
import nanoId from "nanoid";

// Form Elements //
import Password from "./FormElements/Password";
import Email from "./FormElements/Email";
import { File, MultiFile } from "./FormElements/File";
import Text from "./FormElements/Text";
import Memo from "./FormElements/Memo";
import TextArea from "./FormElements/TextArea";
import PlainText from "./FormElements/PlainText";
import Color from "./FormElements/Color";
import DataList from "./FormElements/DataList";
import { Select, MultiSelect } from "./FormElements/Select";
import Checkbox from "./FormElements/Checkbox";
import { Checklist, InlineChecklist } from "./FormElements/Checklist";
import { Radio, InlineRadio } from "./FormElements/Radio";
import Switch from "./FormElements/Switch";
import { Toggle, InlineToggle } from "./FormElements/Toggle";
// import Range from "./FormElements/Range";
// import Steps from "./FormElements/Steps";

// Default Render //
export default function FormFactory(props) {
  const { formArray, session } = props;

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


    }
  */

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

  function renderForm() {
    const convertedForm = formArray.map((formElement) => {
      // Add formElementId //
      formElement.formElementId = nanoId();

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
          return (
            <InlineChecklist session={session} formElement={formElement} />
          );
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

    return convertedForm;
  }

  return (
    <form id="form needs-validation" novalidate>
      {renderForm}
    </form>
  );
}
