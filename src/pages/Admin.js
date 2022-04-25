import React from "react";

export default function Home(props) {
  const { setActions, page } = props;
  // session
  React.useEffect(() => {
    setActions([
      {
        label: "Home",
        icon: "bi-chevron-left",
        id: "home-link",
      },
      {
        label: "Users",
        icon: "bi-people",
        id: "users-link",
      },
      {
        label: "Global Settings",
        icon: "bi-sliders",
        id: "global-settings-link",
      },
    ]);
  }, [page, setActions]);

  return <div className="col transition-25">Placeholder Admin</div>;
}
