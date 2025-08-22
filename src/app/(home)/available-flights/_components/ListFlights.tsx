"use client"

import { FlightItem } from "./FlightItem"

export const ListFlights = () => {
    return (
        <div className="ticket-container flex flex-col w-full gap-6">
            <FlightItem />
            <p className="text-center text-sm text-[#A0A0AC] h-fit">You’ve reached the end of results.</p>
        </div>
    )
}