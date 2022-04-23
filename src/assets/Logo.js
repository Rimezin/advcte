import React from "react";

export default function Logo(props) {
  const { styleObj } = props;

  return (
    <div id="advcte-header-logo" className="center" style={styleObj}>
      <span className="advcte-logo">Advcte</span>
    </div>
  );
}
