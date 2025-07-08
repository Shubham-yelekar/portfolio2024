import React from "react";
import { useTheme } from "../Theme-context";
import { useState, useEffect } from "react";

const GridTop = (props) => {
  const { theme } = useTheme();
  const [fillColor, setFillColor] = useState("");

  const getCssVariableValue = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(
      variable
    );
  };

  useEffect(() => {
    let newFillColor;
    if (theme === "dark") {
      newFillColor = getCssVariableValue("--nav-icon-color");
    } else {
      newFillColor = getCssVariableValue("--nav-icon-color");
    }

    setFillColor(newFillColor);
  }, [theme]);

  return (
    <svg
      className="absolute -top-64 left-0 w-full scale-[2] md:scale-125 lg:scale-100"
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="606"
      fill={fillColor}
      viewBox="0 0 1440 606"
    >
      <mask
        id="a"
        width="1440"
        height="606"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill={fillColor} d="M1440 606H0V0h1440z"></path>
      </mask>
      <g mask="url(#a)">
        <mask
          id="c"
          width="1933"
          height="606"
          x="-246"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="url(#b)"
            d="M1686.5 303.006C1686.5 135.871 1253.93.382 720.335.382c-533.597 0-966.163 135.489-966.163 302.624s432.566 302.625 966.163 302.625c533.595 0 966.165-135.49 966.165-302.625"
          ></path>
        </mask>
        <g stroke={fillColor} strokeLinecap="round" mask="url(#c)">
          <path
            d="M159.115 64.486c4.202 7.948 317.282 326.046 473.301 484.102M1313.69 64.486c-4.2 7.948-317.278 326.046-473.297 484.102M369.473 68.097l294.513 481.391M1103.36 68.097 808.844 549.488M564.055 69.003c1.06 5.78 90.721 322.131 135.423 479.585M908.77 69.003c-1.06 5.78-90.721 322.131-135.423 479.585M-122.254 70.806c4.213 6.503 472.456 321.831 706.046 478.682M1595.06 70.806c-4.21 6.503-472.45 321.831-706.042 478.682M453.559 549.488h596.451M-123.291 502.981H1794.42M-123.291 450.274H1794.42M-123.291 369.66H1794.42M-123.291 261.145H1794.42M-123.291 141.465H1794.42M736.412 549.488V45.087"
            opacity="0.5"
          ></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -254.329 811.974 0 720.335 303.006)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor}></stop>
          <stop offset="1" stopColor={fillColor} stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GridTop;
