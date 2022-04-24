import React from "react";

export default function ActionBar(props) {
  const { session, renderActions } = props;
  const [panel, setPanel] = React.useState({
    expanded: false,
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
