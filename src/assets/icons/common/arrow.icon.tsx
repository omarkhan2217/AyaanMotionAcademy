import * as React from "react"
import { IIconProps } from "../../../types"
export const ArrowIcon: React.FC<IIconProps> = (props) => {
    const { width = 12, height = 16, fill1 = '#0E2CE2' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
        >
            <path
                fill={fill1}
                d="M1 7a1 1 0 0 0 0 2V7Zm10.707 1.707a1 1 0 0 0 0-1.414L5.343.929A1 1 0 0 0 3.93 2.343L9.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM1 9h10V7H1v2Z"
            />
        </svg>
    )
}
