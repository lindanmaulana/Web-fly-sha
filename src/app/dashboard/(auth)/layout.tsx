import { getSession } from "@/actions/getSession"
import { REDIRECT_ADMIN, REDIRECT_USER } from "@/lib/routes"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface AuthLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Dashboard | Login"
}

const AuthLayout = async ({children}: AuthLayoutProps) => {
    const session = await getSession()

    if(session) {
        if(session.role === "ADMIN") redirect(REDIRECT_ADMIN)

        if(session.role === "CUSTOMER") redirect(REDIRECT_USER) 
    }
    return (
        <section>
            {children}
        </section>
    )
}

export default AuthLayout