import * as React from "react"
export const PlusIcon: React.FC = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
            {...props}
        >
            <circle cx={20} cy={20} r={20} fill="#0024FF" />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={4}
                d="M11 20h18M20 29V11"
            />
        </svg>
    )
}