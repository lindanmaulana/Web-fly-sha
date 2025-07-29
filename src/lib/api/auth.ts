import { LoginSchema, TypeLoginSchema } from "@/lib/validation/auth";
import { api } from "../axiosInstance";
import { errorHandler } from "../utils/errorHandler";

export class ApiAuth {
    static apiName = "users"

    static async login(req: TypeLoginSchema) {
        const validatedFields = LoginSchema.safeParse(req)
        
        if(!validatedFields.success) throw new Error("Invalid input fields!")

        try {
            console.log("sebelum hit api")
            console.log({validatedFields})
            const response = await api.post("/auth/login", validatedFields.data)

            console.log({responseApi: response})
            if(!response.data) throw new Error("Invalid credentials")
            
                console.log({response})
            return response
        } catch (err) {
            const errorMessage: string = errorHandler(err)

            throw new Error(errorMessage)
        }
    }

    static async update() {

    }
}