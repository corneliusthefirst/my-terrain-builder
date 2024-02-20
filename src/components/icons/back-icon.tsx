import { IconPropsType } from "../../types/icon.type"

export default function BackIcon({
  viewBox,
  width = 24,
  height = 24,
  fill = "white",
  ...props
}: IconPropsType) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect
          width="48"
          height="48"
          fill={fill}
          fillOpacity="0.01"
        ></rect>{" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
          fill="#2F88FF"
          stroke="#000000"
          strokeWidth="4"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  )
}
