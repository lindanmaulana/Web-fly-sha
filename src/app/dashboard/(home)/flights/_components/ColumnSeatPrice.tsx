"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FlightColumn } from "./useColumnsFlights"
import { mappingSeats, priceFormat } from "@/lib/utils"
import { useMemo } from "react"

interface ColumnSeatPriceProps {
    flight: FlightColumn
}
export const ColumnSeatPrice = ({flight}: ColumnSeatPriceProps) => {
    const totalSeats = useMemo(() => mappingSeats(flight.seat), [flight.seat])
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item1" className="w-full">
                <AccordionTrigger>Economy</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <div className="font-medium">
                            <span className="text-primary">Harga Tiket: </span>
                            {priceFormat(flight.flight.price)}
                        </div>
                        <div className="font-medium">
                            <span className="text-primary">Sisa Kursi: </span>
                            {totalSeats.economy}/{totalSeats.totalSeatEconomy}
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2" className="w-full">
                <AccordionTrigger>Business</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <div className="font-medium">
                            <span className="text-primary">Harga Tiket: </span>
                            {priceFormat(flight.flight.price + 500000)}
                        </div>
                        <div className="font-medium">
                            <span className="text-primary">Sisa Kursi: </span>
                            10/20
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3" className="w-full">
                <AccordionTrigger>First</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <div className="font-medium">
                            <span className="text-primary">Harga Tiket: </span>
                            {priceFormat(flight.flight.price + 750000)}
                        </div>
                        <div className="font-medium">
                            <span className="text-primary">Sisa Kursi: </span>
                            10/20
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}