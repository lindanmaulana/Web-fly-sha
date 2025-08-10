import { getAllTickets } from "@/actions/tickets"
import { TableTickets } from "./_components/TableTickets"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard | Tickets"
}

const PageTickets = async () => {
    const data = await getAllTickets()
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Tickets</div>
            </div>

            <TableTickets data={data} />
        </>
    )
}

export default PageTickets