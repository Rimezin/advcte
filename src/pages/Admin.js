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
  }, [page, setActions, setPage]);

  return (
    <div className="col transition-25">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb transition-25">
          <li className="breadcrumb-item">
            <button
              onclick={setPage("home")}
              className="btn btn-link hover-blue"
            >
              Home
            </button>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Admin
          </li>
        </ol>
      </nav>
      <div className="row">Placeholder</div>
    </div>
  );
}
