import React from "react";

// Birds example from https://scalora.net/
// Implemented into React by Rimezin

export default function Birds(props) {
  const { session } = props;

  const birds = ["one", "two", "three", "four"];

  function renderBirds() {
    return birds.map((bird) => {
      <div
        className={`bird-container ${
          session.experience.dark ? "" : "filter-blue"
        } bird-container--${bird}`}
      >
        <div className={`bird bird--${bird}`}></div>
      </div>;
    });
  }

  return (
    <div className="birds-container d-none d-xxl-block">{renderBirds}</div>
  );
}
