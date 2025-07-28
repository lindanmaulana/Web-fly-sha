"use server"

import { signIn } from "@/auth"
import { LoginSchema, TypeLoginSchema } from "@/schemas/auth"
import { errorHandler } from "@/lib/utils/errorHandler"

export const AuthLoginCredentials = async (value: TypeLoginSchema) => {
    const validatedFields = LoginSchema.safeParse(value)

    if(!validatedFields.success) throw new Error("Invalid input fields!")

    const {email, password} = validatedFields.data

    try {
        const result = await signIn("credentials",{email, password})

        return result
    } catch (err) {
        const errorMessage: string = errorHandler(err)
        throw new Error(errorMessage)
    }
}