import React from "react";
import { useTheme } from "../Theme-context";
import { useState, useEffect } from "react";

const GridBottom = (props) => {
  const { theme } = useTheme();
  const [fillColor, setFillColor] = useState("currentColor");

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
      className="absolute -bottom-64 inset-x-0 scale-[2] w-full md:scale-125 lg:scale-100"
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="606"
      fill="none"
      viewBox="0 0 1440 606"
    >
      <g clipPath="url(#a)">
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
            d="M1686.5 302.994c0 167.135-432.57 302.624-966.165 302.624-533.597 0-966.163-135.489-966.163-302.624S186.738.369 720.335.369C1253.93.37 1686.5 135.86 1686.5 302.994"
          ></path>
        </mask>
        <g stroke={fillColor} strokeLinecap="round" mask="url(#c)">
          <path
            d="M159.115 541.514c4.202-7.948 317.282-326.046 473.301-484.102M1313.69 541.514c-4.2-7.948-317.278-326.046-473.297-484.102M369.473 537.903 663.986 56.512M1103.36 537.903 808.844 56.512M564.055 536.997c1.06-5.78 90.721-322.131 135.423-479.585M908.77 536.997c-1.06-5.78-90.721-322.131-135.423-479.585M-122.254 535.194c4.213-6.503 472.456-321.831 706.046-478.682M1595.06 535.194c-4.21-6.503-472.45-321.831-706.042-478.682M453.559 56.512h596.451M-123.291 103.019H1794.42M-123.291 155.726H1794.42M-123.291 236.34H1794.42M-123.291 344.855H1794.42M-123.291 464.535H1794.42M736.412 56.512v504.401"
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
          gradientTransform="matrix(0 254.329 -811.974 0 720.335 302.994)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor}></stop>
          <stop offset="1" stopColor={fillColor} stopOpacity="0"></stop>
        </radialGradient>
        <clipPath id="a">
          <path fill={fillColor} d="M0 0h1440v606H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default GridBottom;
