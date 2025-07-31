"use client"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import Link from "next/link"

import type { Airplane } from "@/generated/prisma"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"
import Image from "next/image"

export const useColumnsAirplanes = ()=> {
    const columns = useMemo(() => {
        const column: ColumnDef<Airplane>[] = [
            {
                accessorKey: "image",
                header: "Image",
                cell: ({row}) => {
                    const plane = row.original

                    if(!plane.image) return <span>Image not found!</span>

                    console.log({plane})
                    return (
                        <div>
                            <Image src={plane.image} alt={plane.name} width={180} height={180} className="rounded" />
                        </div>
                    )
                }
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
                                    <Pencil className="mr-2 size-4" /> Edit
                                </Link>
                            </Button>
                        </div>
                    )
                }
            }
        ]

        return column
    }, [])

    return columns
}