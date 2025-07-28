import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ApiAuth } from "./lib/api/auth";
import { LoginSchema } from "./schemas/auth";

export default {providers: 
    [
        Credentials({
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            
            authorize: async (credentials) => {
                try {
                    const validatedFields = await LoginSchema.parseAsync(credentials)

                    const result = await ApiAuth.login(validatedFields)

                    return result.data
                } catch {
                    return null
                }
            }
        })
    ],
} satisfies NextAuthConfig