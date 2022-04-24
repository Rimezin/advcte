import React from "react";

export default function Home(props) {
  const { setActions, setPage } = props;
  // session, setModal
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
      label: "Admin",
      icon: "bi-sliders",
      action: setPage("admin"),
    },
  ];

  setActions(actions);

  return <div className="col transition-25">Placeholder Home</div>;
}
