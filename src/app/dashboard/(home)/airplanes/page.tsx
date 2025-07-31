import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { columns } from "./_components/Columns"
import { DataTable } from "@/components/DataTable"
import { getAllAirplanes } from "@/actions/airplanes"

const AirplanesPage = async () => {
    const data = await getAllAirplanes()

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Airplanes</div>
                <Button asChild>
                    <Link href={'/dashboard/airplanes/create'}>
                        <Plus className="mr-2 size-4" /> Tambah Data
                    </Link>
                </Button>
            </div>

            <DataTable columns={columns} data={data} />
        </>
    )
}

export default AirplanesPage