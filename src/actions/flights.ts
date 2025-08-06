"use server"

import { errorHandler } from "@/lib/utils/errorHandler"
import { flightsSchema } from "@/lib/validation/flights"
import { ActionResult } from "next/dist/server/app-render/types"
import { redirect } from "next/navigation"
import prisma from "../../lib/prisma"
import { checkAirplane } from "./airplanes"
import { generateSeatPerClass } from "@/lib/utils"
import { revalidatePath } from "next/cache"

export const getAllFlights = async () => {
    try {
        const result = await prisma.flight.findMany({
            include: {
                plane: true,
                seats: true
            }
        })

        return result
    } catch (err) {
        const errorMessage = errorHandler(err)

        console.log({errorMessage})

        return []
    }
}

export const createFlights = async (prevState: null, formData: FormData): Promise<ActionResult> => {

    const departureDate = new Date(formData.get("departure_date") as string)
    const arrivalDate = new Date(formData.get("arrival_date") as string)

    const validatedFields = flightsSchema.safeParse({
        plane_id: formData.get("plane_id"),
        departure_city: formData.get("departure_city"),
        departure_date: departureDate,
        departure_id: formData.get("departure_id"),
        departure_city_code: formData.get("departure_city_code"),
        arrival_date: arrivalDate,
        destination_city: formData.get("destination_city"),
        destination_city_code: formData.get("destination_city_code"),
        price: formData.get("price")
    })

    if(!validatedFields.success) {
        const errorDesc = validatedFields.error.issues.map((issue) => issue.message)

        return {
            success: false,
            errorTitle: "Error Validation",
            errorDesc
        }
    }

    try {
        await checkAirplane(validatedFields.data.plane_id)

        const result = await prisma.flight.create({
            data: {
                ...validatedFields.data,
                price: Number(validatedFields.data.price),
            }
        })
        
        if(!result) throw new Error("Failed insert data flights")

        const seats = generateSeatPerClass(result.id)
        await prisma.flightSeat.createMany({
            data: seats
        })

        revalidatePath("/dashboard/flights")
    } catch (err) {
        const errorMessage = errorHandler(err)

        return {
            success: false,
            errorTitle: "Failed insert data",
            erroDesc: [errorMessage]
        }
    }

    redirect("/dashboard/flights")
}