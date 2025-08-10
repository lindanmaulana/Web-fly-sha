"use server"

import { errorHandler } from "@/lib/utils/errorHandler"
import prisma from "../../lib/prisma"

export const getAllTickets = async () => {
    try {
        const result = await prisma.ticket.findMany({
            include: {
                flight: true,
                customer: true,
                seat: true
            }
        })

        return result
    } catch (err) {
        const errorMessage = errorHandler(err)
        console.log({errorMessage})
        return []
    }
}