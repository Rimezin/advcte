import React from "react";

export default function Home(props) {
  const { setActions, page, setPage } = props;
  // session
  React.useEffect(() => {
    setActions([
      {
        label: "Save",
        icon: "bi-save",
        id: "save-enc",
        action: () => {
          alert("Save clicked!");
        },
      },
      {
        label: "Cancel",
        icon: "bi-x-circle",
        id: "cancel-enc",
        action: () => {
          alert("cancel clicked!");
        },
      },
      {
        label: "Delete",
        icon: "bi-trash3",
        id: "delete-enc",
        action: () => {
          alert("delete clicked!");
        },
      },
      {
        label: "Admin",
        icon: "bi-sliders",
        id: "admin-link",
        action: () => {
          setPage("admin");
        },
      },
    ]);
  }, [page, setActions]);

  return <div className="col transition-25">Placeholder Home</div>;
}
