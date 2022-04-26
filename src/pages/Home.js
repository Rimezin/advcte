import React from "react";
import Breadcrumb from "../assets/Breadcrumb";

export default function Home(props) {
  const { setActions, page, setPage, session } = props;

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
  }, [page, setActions, setPage]);

  return (
    <div className="col transition-25">
      {/* <Breadcrumb session={session} page={page} /> */}
      Placeholder Home
    </div>
  );
}
