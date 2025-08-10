"use client"

import { createFlights, updateFlights } from "@/actions/flights"
import type { ActionResult } from "@/actions/login"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Airplane, Flight } from "@/generated/prisma"
import { dateFormat } from "@/lib/utils"
import { useActionState } from "react"

const initialState: ActionResult = {
    success: false
}

interface FormFlightsProps {
    type: "ADD" | "EDIT"
    defaultValue?: Flight | null
    dataAirplanes?: Airplane[] | null
}
export const FormFlights = ({type, defaultValue, dataAirplanes}: FormFlightsProps) => {

    const id = defaultValue?.id ? defaultValue.id : ""
    const updateFlightWithId = (_state: ActionResult, formData: FormData) => updateFlights(null, formData, id)

    const [state, formAction] = useActionState(type === "ADD" ? createFlights : updateFlightWithId, initialState)

    const departure_date = dateFormat(defaultValue?.departure_date ?? "","YYYY-MM-DDTHH:MM")
    const arrival_date = dateFormat(defaultValue?.arrival_date ?? "","YYYY-MM-DDTHH:MM")

    return (
        <form action={formAction} className="space-y-6">
            {state.errorTitle && state.errorDesc && (
                <div className="space-y-2 bg-red-500 px-4 py-3 rounded-md">
                    <div className="text-white font-bold">{state.errorTitle}</div>

                    <ul className="text-sm list-disc pl-4 text-white">
                        {state.errorDesc.length > 1 ? state.errorDesc.map((err: string) => (
                            <li key={err}>{err}</li>
                        )): (
                            <li>{state.errorDesc}</li>
                        )}
                    </ul>
                </div>
            )}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="plane_id">Pilih Pesawat</Label>
                    <Select name="plane_id" defaultValue={defaultValue ? defaultValue.plane_id : ""}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Airplane" />
                        </SelectTrigger>

                        <SelectContent>
                            {dataAirplanes?.map((airplane) => (
                                <SelectItem key={airplane.id} value={airplane.id}>{airplane.name} <span className="text-xs text-gray-600">{airplane.code}</span></SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">Harga Tiket</Label>
                    <Input type="number" placeholder="Harga tiket..." min={0} name="price" id="price" defaultValue={defaultValue?.price} required />
                    <span className="text-xs text-gray-900 ">Harga untuk kelas Business bertambah Rp 500.000 & kelas First bertambah 750.000</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="departure_city">Kota Keberangkatan</Label>
                    <Input type="text" placeholder="Kota Keberangkatan" name="departure_city" id="departure_city" defaultValue={defaultValue?.departure_city} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="departure_date">Tanggal Keberangkatan</Label>
                    <Input type="datetime-local" placeholder="Tanggal Keberangkatan" name="departure_date" id="departure_date" className="block" defaultValue={departure_date} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="departure_city_code">Kode kota</Label>
                    <Input type="text" placeholder="Kode Kota" name="departure_city_code" id="departure_city_code" className="block" defaultValue={defaultValue?.departure_city_code} required />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="destination_city">Kota Tujuan</Label>
                    <Input type="text" placeholder="Kota Tujuan..." name="destination_city" id="destination_city" defaultValue={defaultValue?.destination_city} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="arrival_date">Tanggal Tiba</Label>
                    <Input type="datetime-local" placeholder="Tanggal Tiba..." name="arrival_date" id="arrival_date" className="block" defaultValue={arrival_date} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="destination_city_code">Kode kota Tujuan</Label>
                    <Input type="text" placeholder="Kode Kota Tujuan" name="destination_city_code" id="destination_city_code" className="block" defaultValue={defaultValue?.destination_city_code} required />
                </div>
            </div>

            <ButtonSubmit />
        </form>
    )

}