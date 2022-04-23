import React from "react";

export default function Main(props) {
  //const { session } = props;

  return (
    <div id="advcte-main" className="row h-100">
      <div id="advcte-main-action" className="col-2 h-100 border">
        Action Bar
      </div>
      <div id="advcte-main-content" className="col-10 h-100 border">
        Main Content
      </div>
    </div>
  );
}
