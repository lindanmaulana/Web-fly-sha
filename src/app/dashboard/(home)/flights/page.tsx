import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { TableFlight } from "./_components/TableFlight"
import { getAllFlights } from "@/actions/flights"

export const metadata: Metadata = {
    title: "Dashboard | Flights"
}

const FlightsPage = async () => {
    const data = await getAllFlights()
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <h2 className="my-5 text-2xl font-bold">Flights</h2>
                <Button asChild>
                    <Link href={"/dashboard/flights/create"}>
                        <Plus className="mr-2 size-4" /> Tambah Data
                    </Link>
                </Button>
            </div>

            <TableFlight data={data} />
        </>
    )
}

export default FlightsPage