import React from "react";

export default function Logo(props) {
  const { session } = props;

  return (
    <div
      id="advcte-header-logo"
      className="w-80 center"
      style={{
        fontSize: session.loggedOn ? "42px" : "64px",
      }}
    >
      <span className="advcte-logo">Advcte</span>
    </div>
  );
}
