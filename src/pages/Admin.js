import React from "react";

export default function Home(props) {
  const { setActions, page, setPage } = props;
  // session
  React.useEffect(() => {
    setActions([
      {
        label: "Home",
        icon: "bi-chevron-left",
        id: "home-link",
        action: () => {
          setPage("home");
        },
      },
      {
        label: "Users",
        icon: "bi-people",
        id: "users-link",
        action: () => {
          alert("people clicked!");
        },
      },
      {
        label: "Global Settings",
        icon: "bi-sliders",
        id: "global-settings-link",
        action: () => {
          alert("settings clicked!");
        },
      },
    ]);
  }, [page, setActions]);

  return <div className="col transition-25">Placeholder Admin</div>;
}
