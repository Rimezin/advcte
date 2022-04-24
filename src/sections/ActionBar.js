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
  ];

  let renderActions = actions.map((action) => {
    return (
      <li className={panel.expanded ? "" : "panel-item-shrunk"}>
        <a
          href="/"
          onClick={action.action}
          className={
            "nav-link" +
            (session.experience.darkMode ? " link-light" : " link-dark")
          }
        >
          <i className={action.icon}></i>
          {action.label}
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
      style={{ width: panel.expanded ? "280px" : "4.5rem", height: "100%" }}
    >
      <a
        href="/"
        className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none ${
          session.experience.darkMode ? "link-light" : "link-dark"
        }`}
      >
        <button onClick={handlePanel}>
          <i
            className={
              panel.expanded
                ? "bi-arrow-left-circle-fill"
                : "bi-arrow-right-circle-fill"
            }
            style={{
              fontSize: "32px",
              pointerEvents: "none",
              backgroundColor: "transparent",
              outline: "none",
              userSelect: "none",
            }}
          ></i>
          {panel.expanded && <span className="fs-4">Actions</span>}
        </button>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">{renderActions}</ul>
      <hr />
      <div>Words here?</div>
    </div>
  );
}
