import { getOneAirplanes } from "@/actions/airplanes"
import { Airplane } from "@/generated/prisma"
import { Metadata } from "next"
import { FormAirplanes } from "@/app/dashboard/(home)/airplanes/_components/FormAirplanes"


export const metadata: Metadata = {
    title: "Airplanes | Edit"
}

interface AirplanesEditPageProps {
    params: {id: string}
}

const AirplanesEditPage = async ({params}: AirplanesEditPageProps) => {
    const {id} = params
    const data = await getOneAirplanes(id) as Airplane | null

    if(!data) return <p>Loading please wait...</p>

    return (
         <div>
            <div className="flex flex-row items-center justify-between">
            <div className="my-5 text-2xl font-bold">Edit data Airplane</div>
            </div>
            <FormAirplanes type="EDIT" defaultValue={data} />
        </div>
    )
}


export default AirplanesEditPage