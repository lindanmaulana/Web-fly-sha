import { Button } from "@/components/ui/button"
import { BookOpenText, Plane, Ticket, User } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { ReactNode } from "react"
import { ButtonLogout } from "./_components/ButtonLogout"
import { getSession } from "@/actions/getSession"
import { redirect } from "next/navigation"
import { REDIRECT_UNAUTHORIZED, REDIRECT_USER } from "@/lib/routes"

interface DashboardLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Dashboard"
}

const DashboardLayout = async ({children}: DashboardLayoutProps) => {
    const session = await getSession()

    if(!session) redirect(REDIRECT_UNAUTHORIZED)
    else if(session.role === "USER") redirect(REDIRECT_USER)

    return (
        <section>
            <nav className="border border-muted p-5">
                <span className="font-bold text-primary">
                    FlySha Dashboard
                </span>
            </nav>
            <section className="flex flex-row gap-5 items-start flex-wrap">
                <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
                    <div className="space-y-2">
                        <Button variant={"ghost"} className="w-full justify-start" asChild>
                            <Link href={'/dashboard'}>Dashboard</Link>
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <h3 className="uppercase text-xs font-bold">Master Data</h3>
                        <Button variant={"ghost"} className="w-full justify-start" asChild>
                            <Link href={'/dashboard/airplanes'}>
                               <Plane className="mr-2 size-4" /> Airplanes
                            </Link>
                        </Button>
                        <Button variant={"ghost"} className="w-full justify-start" asChild>
                            <Link href={'/dashboard/flights'}>
                               <BookOpenText className="mr-2 size-4" /> Flights
                            </Link>
                        </Button>
                        <Button variant={"ghost"} className="w-full justify-start" asChild>
                            <Link href={'/dashboard/tickets'}>
                               <Ticket className="mr-2 size-4" /> Tickets
                            </Link>
                        </Button>
                        <Button variant={"ghost"} className="w-full justify-start" asChild>
                            <Link href={'/dashboard/users'}>
                               <User className="mr-2 size-4" /> Users
                            </Link>
                        </Button>
                    </div>

                     <div className="space-y-2">
                        <ButtonLogout />
                    </div>
                </section>
                <section className="grow mt-5 h-[87vh] overflow-y-auto">
                    {children}
                </section>
            </section>

        </section>
    )
}

export default DashboardLayout