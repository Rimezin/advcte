//// SETTINGS FORM DESIGN ////

// Each formElement object should have: //
/*
    formElement = {
        name: "first_name",
        label: "First Name",
        placeholder: "John",
        type: "text",
        instructions: "Please provide your first name",
        disabled: false, // prevents pointer events
        required: true, // will be checked by FormProcessing.js
        dirty: false, // toggles when modified
        layout: {
            size: "default", // or large, or small
            width: 3, // numerical value for bootstrap columns taken 1-12
            floating: true, // placed the label in the field //
        },
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
        },


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

export const fd_settings = [
  {
    name: "is_darkmode",
    label: "Dark Mode",
    placeholder: null,
    type: "switch",
    instructions: null,
    disabled: false,
    required: false,
    dirty: false,
    value: true, //session.experience.darkMode,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      //handleDark();
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: null,
  },
];

export default { fd_settings };
