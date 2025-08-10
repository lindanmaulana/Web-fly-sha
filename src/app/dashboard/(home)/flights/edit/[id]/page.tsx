import { Metadata } from "next"
import { getAllAirplanes } from "@/actions/airplanes"
import { FormFlights } from "../../_components/FormFlights"
import { getOneFlights } from "@/actions/flights"

export const metadata: Metadata = {
    title: "Dashboard | Create data Flights"
}

interface FlightsEditPageProps {
    params: {
        id: string
    }
}

const FlightsEditPage = async ({params}: FlightsEditPageProps) => {
    const {id} = params
    const dataAirplanes = await getAllAirplanes()
    const dataFlight = await getOneFlights(id)

    if(!dataAirplanes) return <p>Loading data...</p>

    return (    
        <div>
            <div className="flex flex-row items-center justify-between">
                <h3>Edit data Flight</h3>
            </div>

            <FormFlights type="EDIT" defaultValue={dataFlight} dataAirplanes={dataAirplanes} />
        </div>
    )
}

export default FlightsEditPage