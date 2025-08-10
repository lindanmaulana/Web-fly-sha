"use client"

import { DataTable } from "@/components/DataTable"
import { TicketsWithRelation } from "@/lib/types/flights"
import { useColumnsTickets } from "./useColumnsTickets"

interface TableTicketsProps {
    data: TicketsWithRelation[]
}
export const TableTickets = ({data}: TableTicketsProps) => {
    const colums = useColumnsTickets()
    return (
        <DataTable columns={colums} data={data} />
    )
}