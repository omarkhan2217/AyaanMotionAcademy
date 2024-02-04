import React from "react"
import { Footer, Navbar } from "."

type MyComponentProps = React.PropsWithChildren<{
    text?: string;
}>;

export const Layout: React.FC<MyComponentProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />

        </>
    )
}