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
  //         className={`breadcrumb-item ${page === crumb ? "active" : ""}`}
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
        <li className="breadcrumb-item active" aria-current="page">
          Breadcrumb
        </li>
      </ol>
      {/* <ol
        className={`breadcrumb ${
          session.experience.darkMode ? "bg-secondary" : ""
        }`}
      >
        {renderCrumbs}
      </ol> */}
    </div>
  );
}
