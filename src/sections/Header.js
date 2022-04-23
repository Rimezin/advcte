import React from "react";
import Logo from "./header/Logo";
import Menu from "./header/Menu";
import UserAction from "./header/UserAction";

export default function Header(props) {
  const { session, handleSession } = props;

  return (
    <div id="advcte-header" className="row">
      <Logo session={session} />
      <Menu session={session} />
      <UserAction session={session} handleSession={handleSession} />
    </div>
  );
}
