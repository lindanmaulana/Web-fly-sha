"use client"

import { DataTable } from "@/components/DataTable"
import { UsersWithoutPassword } from "@/lib/types/type"
import { useColumnsUsers } from "./useColumnsUsers"

interface TableUsersProps {
    data: UsersWithoutPassword[]
}
export const TableUsers = ({data}: TableUsersProps) => {
    const columns = useColumnsUsers()

    return (
        <DataTable columns={columns} data={data} />
    )
}