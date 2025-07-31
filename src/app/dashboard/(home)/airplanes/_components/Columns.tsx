"use client"

import { Button } from "@/components/ui/button"
import type { Airplane } from "@/generated/prisma"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react"
import Link from "next/link"

export const columns: ColumnDef<Airplane>[] = [
    {
        accessorKey: "image",
        header: "Image"
    },
    {
        accessorKey: "code",
        header: "Code"
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        id: "actions",
        cell: ({row}) => {
            const plane = row.original

            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant={"secondary"} size={"sm"} asChild>
                        <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
                            <Pencil className="mr-2 size-4" />
                        </Link>
                    </Button>
                </div>
            )
        }
    }
]