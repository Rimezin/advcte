import React from "react";

export default function Home(props) {
  const { setActions, page } = props;
  // session
  React.useEffect(() => {
    setActions([
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
  }, [page]);

  return <div className="col transition-25">Placeholder Home</div>;
}
