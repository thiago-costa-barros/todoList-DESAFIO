import * as React from "react"

function NotChekedSVG(props) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={28} height={28} rx={4} fill="#D9D9D9" />
    </svg>
  )
}

export default NotChekedSVG