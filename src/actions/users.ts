"use server"

import { errorHandler } from "@/lib/utils/errorHandler"
import prisma from "../../lib/prisma"

export const getAllUsers = async () => {
    try {
        const result = await prisma.user.findMany({
            where: {
                role: "CUSTOMER"
            },
            omit: {
                password: true
            }
        })

        return result
    } catch (err) {
        const errorMessage = errorHandler(err)
        console.log({errorMessage})
        return []
    }
}