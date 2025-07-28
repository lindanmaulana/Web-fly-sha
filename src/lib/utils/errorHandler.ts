import { AuthError } from "next-auth"

export const errorHandler = (err: unknown): string => {
    let errorMessage = "An unexpected error occurred!."

    if(err instanceof Error) {
        errorMessage = err.message
    }

    if(err instanceof AuthError) {
        errorMessage = err.message
    }

    return errorMessage
}