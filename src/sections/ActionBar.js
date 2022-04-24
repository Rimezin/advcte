import React from "react";

export default function ActionBar(props) {
  const { session } = props;
  const [panel, setPanel] = React.useState({
    expanded: false,
  });

  // Actions Listing //
  const actions = [
    {
      label: "Save",
      icon: "bi-save",
      action: () => {
        alert("Save clicked!");
      },
    },
    {
      label: "Cancel",
      icon: "bi-x-circle",
      action: () => {
        alert("Cancel clicked!");
      },
    },
    {
      label: "Delete",
      icon: "bi-trash3",
      action: () => {
        alert("Delete clicked!");
      },
    },
    {
      label: "Refresh",
      icon: "bi-arrow-repeat",
      action: () => {
        alert("Refresh clicked!");
      },
    },
  ];

  // Actions Mapping //
  let renderActions = actions.map((action) => {
    return (
      <li>
        <button
          onClick={(event) => {
            event.preventDefault();
            action.action();
          }}
          className={`nav-link no-select ${
            session.experience.darkMode ? "link-light" : "link-dark"
          } hover-blue`}
        >
          <i
            className={`${action.icon} ${panel.expanded ? "" : "font-grow"}`}
          ></i>
          <span
            className={`${panel.expanded ? "" : "font-shrink"} no-select p-2`}
          >
            {action.label}
          </span>
        </button>
      </li>
    );
  });

  // Function to handle panel expansion //
  function handlePanel(event) {
    event.preventDefault();
    setPanel((currentState) => ({
      ...currentState,
      expanded: !currentState.expanded,
    }));
  }

  // Panel rendering //
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 shadow col-1 transition-25 ${
        panel.expanded ? "p-3" : ""
      } ${session.experience.darkMode ? "bg-dark" : "bg-light"}`}
      style={{
        width: panel.expanded ? "230px" : "4.5rem",
        height: "100%",
        paddingRight: "0px",
      }}
    >
      {/* Top button */}
      <button
        onClick={handlePanel}
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
        }}
        className={`no-select transition-25 ${
          session.experience.darkMode ? "text-white" : "text-dark"
        } ${
          panel.expanded
            ? "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            : "d-block p-3 text-decoration-none"
        } ${session.experience.darkMode ? "link-light" : "link-dark"}`}
      >
        <i
          className={`hover-blue ${
            panel.expanded
              ? "bi-arrow-left-circle-fill"
              : "bi-arrow-right-circle-fill"
          }`}
          style={{
            fontSize: "32px",
            pointerEvents: "none",
          }}
        ></i>
        <span
          className={`no-select transition-25 hover-blue ${
            panel.expanded ? "fs-4 p-3" : "font-shrink"
          }`}
        >
          Actions
        </span>
      </button>
      <hr />

      {/* Actions rendering */}
      <ul
        className={`nav nav-pills flex-column mb-auto ${
          panel.expanded ? "" : "nav-flush text-center"
        }`}
      >
        {renderActions}
      </ul>
    </div>
  );
}
