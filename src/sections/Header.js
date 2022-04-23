import React from "react";
import Logo from "./header/Logo";
import Menu from "./header/Menu";
import UserAction from "./header/UserAction";
import Nav from "./header/Nav";
import Breadcrumb from "./header/Breadcrumb";

export default function Header(props) {
  const { session, handleSession } = props;

  return (
    <div id="advcte-header">
      <div id="advcte-header-top" className="row border">
        <Logo session={session} />
        <Menu session={session} />
        <UserAction session={session} handleSession={handleSession} />
      </div>
      <div id="advcte-header-bottom" className="row border">
        <Nav session={session} />
        <Breadcrumb session={session} />
      </div>
    </div>
  );
}
