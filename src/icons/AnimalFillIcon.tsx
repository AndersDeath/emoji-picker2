import * as React from "react";
import { FunctionComponent } from "react";

export const AnimalFillIcon: FunctionComponent<{
  width?: string;
  fillColor?: string;
  height?: string;
}> = ({ fillColor = "#000", width = "30px", height = "" }) => (
  <svg
    fill={fillColor}
    enableBackground="new 0 0 512 512"
    height={height}
    viewBox="0 0 512 512"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="XMLID_195_">
      <path
        id="XMLID_441_"
        d="m281.668 438.487c2.27-15.358 9.277-29.579 20.348-40.462.167-.164.333-.328.498-.494 40.633-40.633 30.868-116.277-21.81-168.956-52.679-52.679-128.323-62.443-168.956-21.81-.181.181-.361.363-.541.546-10.866 11.072-25.083 18.067-40.428 20.344-17.263 2.562-33.875 10.56-47.072 23.996-31.523 32.096-31.623 84.115-.216 116.324 7.569 7.763 16.273 13.726 25.586 17.891 33.156 14.828 59.543 41.215 74.371 74.371 4.165 9.313 10.128 18.016 17.891 25.585 32.215 31.414 84.247 31.307 116.341-.23 13.44-13.206 21.435-29.831 23.988-47.105z"
      />
      <ellipse
        id="XMLID_481_"
        cx="320.511"
        cy="67.5"
        rx="71.818"
        ry="56.95"
        transform="matrix(.707 -.707 .707 .707 46.146 246.406)"
      />
      <ellipse
        id="XMLID_483_"
        cx="106.514"
        cy="75.612"
        rx="71.818"
        ry="56.95"
        transform="matrix(.707 -.707 .707 .707 -22.269 97.463)"
      />
      <ellipse
        id="XMLID_84_"
        cx="447.186"
        cy="194.175"
        rx="71.818"
        ry="56.95"
        transform="matrix(.707 -.707 .707 .707 -6.325 373.08)"
      />
      <ellipse
        id="XMLID_5_"
        cx="436.47"
        cy="405.568"
        rx="71.818"
        ry="56.95"
        transform="matrix(.707 -.707 .707 .707 -158.941 427.419)"
      />
    </g>
  </svg>
);
