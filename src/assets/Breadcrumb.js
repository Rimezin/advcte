import React from "react";

export default function Breadcrumb(props) {
  const { session } = props;

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
      <ol
        className={`breadcrumb ${
          session.experience.darkMode ? "bg-secondary" : ""
        }`}
      >
        <li className={`breadcrumb-item`} aria-current="page">
          Breadcrumb
        </li>
      </ol>
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
