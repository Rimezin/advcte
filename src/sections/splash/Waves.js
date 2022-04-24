import React from "react";
//Simple CSS Waves
// Original by Goodkatz @ https://codepen.io/goodkatz/pen/LYPGxQz
// Adapted for React by Rimezin

export default function Waves() {
  return (
    <div className="waves-container">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="waves-parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="#0095ff"
            opacity="70%"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="whitesmoke"
            opacity="50%"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="#0095ff"
            opacity="30%"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#00bfff" />
        </g>
      </svg>
    </div>
  );
}
