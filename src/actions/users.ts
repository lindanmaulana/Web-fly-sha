"use server"

import { errorHandler } from "@/lib/utils/errorHandler"
import prisma from "../../lib/prisma"
import { ActionResult } from "./login"
import { LoginSchema, RegisterSchema } from "@/lib/validation/auth"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import { AuthServices } from "@/lib/services/auth"
import { signIn } from "@/auth"
import { success } from "zod"

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


export const registerUsers = async (prevState: unknown, formData: FormData): Promise<ActionResult> => {
    const validatedFields = RegisterSchema.safeParse({
        name: formData.get("name"),
        passport: formData.get("passport"),
        email: formData.get("email"),
        password: formData.get("password")
    })


    if(!validatedFields.success) {
        const errorDesc = validatedFields.error.issues.map((issue) => issue.message)

        return {
            success: false,
            errorTitle: "Error validation",
            errorDesc
        }
    }


    try {
        const hashingPassword = await bcrypt.hash(validatedFields.data.password, 10)

        await prisma.user.create({
            data: {
                ...validatedFields.data,
                password: hashingPassword,
                role: "CUSTOMER"
            }
        })

    } catch (err) {
        const errorMessage = errorHandler(err)

        return {
            success: false,
            errorTitle: "Failed signup account",
            errorDesc: [errorMessage]
        }
    }

    redirect("/sign-in")
}


export const loginUsers = async (prevState: unknown, formData: FormData): Promise<ActionResult> => {
    const validatedFields = LoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if(!validatedFields.success) {
        const errorDesc = validatedFields.error.issues.map((issue) => issue.message)

        return {
            success: false,
            errorTitle: "Error validation",
            errorDesc
        }
    }

    try {
        await signIn("credentials", {
            email: validatedFields.data.email,
            password: validatedFields.data.password,
            redirect: false
        })
    } catch (err) {
        const errorMessage = errorHandler(err)
        console.log({errorMessage})
        return {
            success: false,
            errorTitle: "Login gagal!",
            errorDesc: ['Invalid credentials']
        }
    }

    redirect("/")
}