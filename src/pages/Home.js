import React from "react";

export default function Home(props) {
  const { setActions, page } = props;
  // session
  React.useEffect(() => {
    setActions([
      {
        label: "Save",
        icon: "bi-save",
        id: "save-enc",
      },
      {
        label: "Cancel",
        icon: "bi-x-circle",
        id: "cancel-enc",
      },
      {
        label: "Delete",
        icon: "bi-trash3",
        id: "delete-enc",
      },
      {
        label: "Admin",
        icon: "bi-arrow-repeat",
        id: "admin-link",
      },
    ]);
  }, [page, setActions]);

  return <div className="col transition-25">Placeholder Home</div>;
}
