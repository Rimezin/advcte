import React from "react";
import Breadcrumb from "../assets/Breadcrumb";

export default function Home(props) {
  const { setActions, page, setPage, session } = props;

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
  }, [page, setActions, setPage]);

  return (
    <div className="col transition-25 m-3">
      <Breadcrumb session={session} page={page} />
      Placeholder Admin
    </div>
  );
}
