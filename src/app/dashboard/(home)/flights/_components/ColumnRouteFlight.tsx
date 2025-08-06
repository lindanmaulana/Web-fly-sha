import { Flight } from "@/generated/prisma"
import { dateFormat } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ColumnRouteFlightProps {
    flight: Flight
}
export const ColumnRouteFlight = ({flight}: ColumnRouteFlightProps) => {
    return (
        <div className="flex flex-row gap-5 items-center">
            <div className="text-center">
                <h4 className="font-bold">{flight.departure_city_code}</h4>
                <h4 className="font-medium">{flight.departure_city}</h4>

                <h4 className="text-xs text-gray-500">{dateFormat(flight.departure_date)}</h4>
            </div>
            <ArrowRight className="size-5" />
            <div className="text-center">
                <h4 className="font-bold">{flight.destination_city_code}</h4>
                <h4 className="font-medium">{flight.destination_city}</h4>

                <h4 className="text-xs text-gray-500">{dateFormat(flight.arrival_date)}</h4>
            </div>
        </div>
    )
}