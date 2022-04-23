import React from "react";

export default function Header(props) {
  const { session, handleSession } = props;

  return (
    <div id="advcte-header">
      <Logo session={session} />
      <div>hello</div>
    </div>
  );
}
