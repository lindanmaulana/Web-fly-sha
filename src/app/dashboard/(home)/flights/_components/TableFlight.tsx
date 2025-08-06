"use client"

import { DataTable } from "@/components/DataTable"
import { Flight } from "@/generated/prisma"
import { useColumnsFlights } from "./useColumnsFlights"

interface TableFlightProps {
    data: Flight[]
}
export const TableFlight = ({data}: TableFlightProps) => {
    const columns = useColumnsFlights()
    return (
        <DataTable data={data} columns={columns} />
    )
}