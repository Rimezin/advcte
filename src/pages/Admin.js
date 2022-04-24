import React from "react";

export default function Admin(props) {
  const { setActions, setPage } = props;
  //setModal, session
  const actions = [
    {
      label: "Home",
      icon: "bi-chevron-left",
      action: setPage("home"),
    },
    {
      label: "Users",
      icon: "bi-people",
      action: () => {
        alert("Users clicked!");
      },
    },
    {
      label: "Global Settings",
      icon: "bi-sliders",
      action: () => {
        alert("Settings clicked!");
      },
    },
  ];

  setActions(actions);

  return <div className="col transition-25">Placeholder Admin</div>;
}
