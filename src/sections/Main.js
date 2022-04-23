import React from "react";
import ActionBar from "./main/ActionBar";

export default function Main(props) {
  const { session } = props;

  return (
    <div id="advcte-main" className="row h-100">
      <ActionBar session={session} />
      <div id="advcte-main-content" className="col-10 h-100 border">
        Main Content
      </div>
    </div>
  );
}
