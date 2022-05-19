import * as React from "react";

const SVGComponent = (props) => (
  <svg
    width={38}
    height={38}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29 27H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2zm-15 0h4v4h-4zm17-4H1m8 8h14"
      fill="none"
      stroke="#fff"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SVGComponent;
