"use client"

import { UsersWithoutPassword } from "@/lib/types/type"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

export const useColumnsUsers = () => {
    const columns = useMemo(() => {
        const column: ColumnDef<UsersWithoutPassword>[] = [
            {
                accessorKey: "name",
                header: "Nama",
            },
            {
                accessorKey: "email",
                header: "Email"
            },
            {
                accessorKey: "passport",
                header: "Passport"
            }
        ]

        return column
    }, [])

    return columns
}