//// PROFILE FORM DESIGN ////

// Each formElement object should have: //
/*
    formElement = {
        name: "first_name",
        label: "First Name",
        placeholder: "John",
        type: "text",
        instructions: "Please provide your first name",
        disabled: false, // prevents pointer events
        readOnly: false, // prevents changing the value, but allows pointer events
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

export const fd_profile = [
  {
    name: "first_name",
    label: "First Name",
    placeholder: "John",
    type: "text",
    instructions: "Please provide your first name",
    disabled: false,
    readOnly: false,
    required: true,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: {
      show: false,
      isValid: false,
      valid: "Looks good!",
      invalid: "Please enter a first name.",
    },
  },
  {
    name: "last_name",
    label: "Last Name",
    placeholder: "Smith",
    type: "text",
    instructions: "Please provide your last name",
    disabled: false,
    readOnly: false,
    required: true,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: {
      show: false,
      isValid: false,
      valid: "Looks good!",
      invalid: "Please enter a last name.",
    },
  },
  {
    name: "username",
    label: "Username",
    placeholder: "Username",
    type: "text",
    instructions: "Configured by the Administrator.",
    disabled: false,
    readOnly: true,
    required: false,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: {
      show: false,
      isValid: false,
      valid: "Looks good!",
      invalid: "Please enter a last name.",
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    instructions: "Choose something strong!",
    disabled: false,
    readOnly: false,
    required: true,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: {
      show: false,
      isValid: false,
      valid: "Looks good!",
      invalid: "Please enter a valid password.",
    },
  },
  {
    name: "profile_description",
    label: "Describe Yourself",
    placeholder: "Type some words here...",
    type: "textarea",
    instructions: "Tell us about your favorite things.",
    disabled: false,
    readOnly: false,
    required: true,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 12,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: {
      show: false,
      isValid: false,
      valid: "Looks good!",
      invalid: "Please provide some details.",
    },
  },
  {
    name: "is_darkmode",
    label: "Dark Mode",
    placeholder: null,
    type: "switch",
    instructions: null,
    disabled: false,
    readOnly: false,
    required: false,
    dirty: false,
    value: null,
    layout: {
      size: "default",
      width: 3,
    },
    onClick: function () {
      // NOTHING
    },
    onChange: function () {
      // NOTHING
    },
    options: null,
    feedback: null,
  },
];

export default { fd_profile };
