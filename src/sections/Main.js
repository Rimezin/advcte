import React from "react";
import ActionBar from "./ActionBar";

// Pages import //
import Home from "../pages/Home";

export default function Main(props) {
  const { session, page } = props;
  const [actions, setActions] = React.useState([
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
  ]);

  // Switch Page Function //
  function renderPage(param) {
    switch (param.toLowerCase()) {
      case "home":
        return <Home session={session} setActions={setActions} />;
      default:
        return <div className="col">Placeholder</div>;
    }
  }

  return (
    <main
      className={`row gx-0 transition-25 ${
        session.experience.darkMode ? "bg-secondary text-white" : "bg-white"
      }`}
    >
      <ActionBar session={session} actions={actions} />
      {renderPage(page)}
    </main>
  );
}
