import React from "react";

export default function Home(props) {
  const { setActions, page, setPage } = props;
  // session
  React.useEffect(() => {
    setActions([
      {
        label: "Home",
        icon: "bi-chevron-left",
        action: () => {
          setPage("home");
        },
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
    ]);
  }, [page, setActions, setPage]);

  return <div className="col transition-25">Placeholder Home</div>;
}
