import { LoginSchema, TypeLoginSchema } from "@/schemas/auth";
import { api } from "../axiosInstance";
import { errorHandler } from "../utils/errorHandler";

export class ApiAuth {
    static apiName = "users"

    static async login(req: TypeLoginSchema) {
        const validatedFields = LoginSchema.safeParse(req)

        if(!validatedFields.success) throw new Error("Invalid input fields!")

        try {
            const response = await api.post("/auth/login", validatedFields.data)

            if(!response.data) throw new Error("Invalid credentials")
            
            return response
        } catch (err) {
            const errorMessage: string = errorHandler(err)

            throw new Error(errorMessage)
        }
    }

    static async update() {

    }
}