"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"


interface SessionProps {
    children: ReactNode
}
export const Session = ({children}: SessionProps) => {
    return (
        <SessionProvider refetchOnWindowFocus={false}>
            {children}
        </SessionProvider>
    )
}