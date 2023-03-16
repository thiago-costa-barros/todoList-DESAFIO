import * as React from "react"

function CheckedSVG(props) {
    return (
        <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={28} height={28} rx={4} fill="#0089FF" />
            <path
                d="M22.25 8.75l-10.5 10.5L6.5 14"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CheckedSVG
