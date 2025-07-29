import z from "zod";

export const LoginSchema = z.object({
    email: z.email({error: "Email tidak valid"}),
    password: z.string()
})

export const RegisterSchema = z.object({
    name: z.string().optional(),
    email: z.email(),
    password: z.string().optional(),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
export type TypeRegisterSchema = z.infer<typeof RegisterSchema>