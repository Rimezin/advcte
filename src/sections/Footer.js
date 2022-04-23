import React from "react";

export default function Footer(props) {
  //const { session } = props;

  return (
    <div id="advcte-footer" className="row fixed-bottom">
      <div id="advcte-footer-chat" className="col-2 border">
        Chat
      </div>
      <div id="advcte-footer-status" className="col-8 border">
        Status Bar
      </div>
    </div>
  );
}
