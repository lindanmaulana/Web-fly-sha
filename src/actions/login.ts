"use server"

import { signIn } from "@/auth"
import { errorHandler } from "@/lib/utils/errorHandler"
import { LoginSchema } from "@/lib/validation/auth"

export interface ActionResult {
    success: boolean
    errorTitle?: string
    errorDesc?: string[]
}
export const AuthLoginCredentials = async (prevState: unknown, formData: FormData): Promise<ActionResult> => {
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

        return {
            success: true,
        }
    } catch (err) {
        const errorDesc: string = errorHandler(err)

        return {
            success: false,
            errorTitle: "Auth Error",
            errorDesc: [errorDesc]
        }
    }
}