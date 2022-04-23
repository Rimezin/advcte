import React from "react";

export default function Main(props) {
  //const { session } = props;

  return (
    <div id="advcte-main" className="row mh-100">
      <div id="advcte-main-action" className="col-2 border">
        Action Bar
      </div>
      <div id="advcte-main-content" className="col-10 border">
        Main Content
      </div>
    </div>
  );
}
