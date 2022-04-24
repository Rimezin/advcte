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

  function handlePanel() {
    setPanel((currentState) => ({
      ...currentState,
      expanded: !currentState.expanded,
    }));
  }

  return (
    <div
      className={
        "d-flex flex-column flex-shrink-0" +
        (panel.expanded ? " p-3" : "") +
        (session.experience.darkMode ? " bg-dark" : " bg-light")
      }
      style={{ width: panel.expanded ? "280px" : "4.5rem" }}
    >
      <a
        href="/"
        className={
          "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" +
          (session.experience.darkMode ? " link-light" : " link-dark")
        }
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
      <div className="dropdown">
        <a
          href="/"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
          style=""
        >
          <li>
            <a className="dropdown-item" href="/">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
