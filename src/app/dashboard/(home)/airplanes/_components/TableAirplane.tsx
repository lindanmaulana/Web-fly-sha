"use client"

import { DataTable } from "@/components/DataTable"
import { Airplane } from "@/generated/prisma"
import { useColumnsAirplanes } from "./useColumnsAirplanes"

interface TableAirplaneProps {
    data: Airplane[]
}

export const TableAirplane = ({data}: TableAirplaneProps) => {
    const columns = useColumnsAirplanes()

    return (
        <DataTable data={data} columns={columns} />
    )
}