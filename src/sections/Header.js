import React from "react";
import Logo from "./header/Logo";

export default function Header(props) {
  const { session } = props;

  return (
    <div id="advcte-header">
      <Logo session={session} />
      <div>hello</div>
    </div>
  );
}
