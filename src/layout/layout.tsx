import React from "react"
import { Footer, Navbar } from "."

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout: React.FC = (props: any) => {

    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>

    )
}