import React from "react";

export default function ActionBar(props) {
  const { session } = props;
  const [panel, setPanel] = React.useState({
    expanded: true,
  });

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

  let renderActions = actions.map((action) => {
    return (
      <li>
        <a
          href="/"
          onClick={action.action}
          className={
            "nav-link" +
            (session.experience.darkMode ? " link-light" : " link-dark")
          }
        >
          <i
            className={`${action.icon} ${panel.expanded ? "" : "font-grow"}`}
          ></i>
          <span className={panel.expanded ? "p-2" : "font-shrink p-2"}>
            {action.label}
          </span>
        </a>
      </li>
    );
  });

  function handlePanel(event) {
    event.preventDefault();
    setPanel((currentState) => ({
      ...currentState,
      expanded: !currentState.expanded,
    }));
  }

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 shadow ${
        panel.expanded ? "p-3" : ""
      } ${session.experience.darkMode ? "bg-dark" : "bg-light"}`}
      style={{
        width: panel.expanded ? "280px" : "4.5rem",
        height: "100%",
      }}
    >
      <a
        href="/"
        className={`${
          panel.expanded
            ? "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            : "d-block p-3 text-decoration-none"
        } ${session.experience.darkMode ? "link-light" : "link-dark"}`}
      >
        <button
          onClick={handlePanel}
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
          }}
          className={`hover-blue ${
            session.experience.darkMode ? "text-white" : "text-dark"
          }`}
        >
          <i
            className={
              panel.expanded
                ? "bi-arrow-left-circle-fill"
                : "bi-arrow-right-circle-fill"
            }
            style={{
              fontSize: "32px",
              pointerEvents: "none",
              userSelect: "none",
            }}
          ></i>
          <span className={panel.expanded ? "fs-4 p-3" : "font-shrink"}>
            Actions
          </span>
        </button>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">{renderActions}</ul>
      <hr />
      <div>Words here?</div>
    </div>
  );
}
