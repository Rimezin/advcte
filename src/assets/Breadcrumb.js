import React from "react";

export default function Breadcrumb(props) {
  //   const { session, page } = props;

  //   let crumbs = () => {
  //     switch (page) {
  //       case "home":
  //         return ["home"];
  //       default:
  //         break;
  //     }
  //   };

  //   let renderCrumbs = crumbs.map((crumb) => {
  //     return (
  //       <li
  //         class={`breadcrumb-item ${page === crumb ? "active" : ""}`}
  //         aria-current="page"
  //       >
  //         {crumb}
  //       </li>
  //     );
  //   });

  return (
    <div aria-label="breadcrumb">
      Breadcrumb
      {/* <ol
        class={`breadcrumb ${
          session.experience.darkMode ? "bg-secondary" : ""
        }`}
      >
        {renderCrumbs}
      </ol> */}
    </div>
  );
}
