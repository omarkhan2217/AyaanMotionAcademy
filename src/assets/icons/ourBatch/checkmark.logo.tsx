import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

 export const CheckMark = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 5.667 3.864 8 10 1"
    />
  </svg>
)
