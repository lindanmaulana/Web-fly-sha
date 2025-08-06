import { Metadata } from "next"
import { FormFlights } from "../_components/FormFlights"
import { getAllAirplanes } from "@/actions/airplanes"

export const metadata: Metadata = {
    title: "Dashboard | Create data Flights"
}

const FlightsCreatePage = async () => {
    const dataAirplanes = await getAllAirplanes()

    if(!dataAirplanes) return <p>Loading data...</p>
    return (    
        <div>
            <div className="flex flex-row items-center justify-between">
                <h3>Tambah data Flight</h3>
            </div>

            <FormFlights type="ADD" dataAirplanes={dataAirplanes} />
        </div>
    )
}

export default FlightsCreatePage