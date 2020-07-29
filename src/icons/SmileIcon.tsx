import * as React from "react";
import { FunctionComponent } from "react";

export const SmileIcon: FunctionComponent<{
  width?: string;
  fillColor?: string;
  height?: string;
}> = ({ fillColor = "#000", width = "30px", height = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.72939 13.6462C8.19909 13.3598 8.81146 13.5067 9.10041 13.9739L9.10294 13.9778C9.10717 13.9843 9.11588 13.9975 9.12903 14.0164C9.15541 14.0542 9.19923 14.1144 9.2603 14.1895C9.38327 14.3408 9.5711 14.5464 9.82158 14.7518C10.321 15.1613 11.0418 15.55 12 15.55C12.9582 15.55 13.679 15.1613 14.1784 14.7518C14.4289 14.5464 14.6167 14.3408 14.7397 14.1895C14.8008 14.1144 14.8446 14.0542 14.871 14.0164C14.8841 13.9975 14.8928 13.9845 14.8971 13.978L14.8978 13.9768L14.899 13.9749L14.8996 13.9739C15.1886 13.5067 15.8009 13.3598 16.2706 13.6462C16.7421 13.9338 16.8913 14.5491 16.6038 15.0206L16.6028 15.0222L16.6017 15.024L16.5992 15.0281L16.5926 15.0386L16.5736 15.0683C16.5583 15.0918 16.5378 15.1227 16.5118 15.1598C16.4601 15.2341 16.3867 15.3341 16.2915 15.4512C16.102 15.6843 15.8211 15.9912 15.4466 16.2983C14.696 16.9138 13.5418 17.55 12 17.55C10.4582 17.55 9.30401 16.9138 8.55342 16.2983C8.17889 15.9912 7.89798 15.6843 7.70845 15.4512C7.61327 15.3341 7.5399 15.2341 7.48815 15.1598C7.46225 15.1227 7.44165 15.0918 7.42636 15.0683L7.40735 15.0386L7.4008 15.0281L7.39826 15.024L7.39717 15.0222L7.3962 15.0206C7.10868 14.5491 7.25785 13.9338 7.72939 13.6462ZM16.5 9.5C16.5 10.3284 15.8284 11 15 11C14.1716 11 13.5 10.3284 13.5 9.5C13.5 8.67157 14.1716 8 15 8C15.8284 8 16.5 8.67157 16.5 9.5ZM9 11C9.82843 11 10.5 10.3284 10.5 9.5C10.5 8.67157 9.82843 8 9 8C8.17157 8 7.5 8.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11Z"
    />
  </svg>
);
