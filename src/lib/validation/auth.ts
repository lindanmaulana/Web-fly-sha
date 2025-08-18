import z from "zod";

export const LoginSchema = z.object({
    email: z.email({error: "Email tidak valid"}),
    password: z.string().min(1, "Password tidak boleh kosong!")
})

export const RegisterSchema = z.object({
    name: z.string({error: "Nama tidak boleh kosong!"}).min(4, "Nama harus memiliki minimal 4 karakter"),
    email: z.email({error: "Email tidak valid"}),
    passport: z.string({error: "Passport tidak boleh kosong!"}),
    password: z.string({error: "Passoword tidak boleh kosong!"}).min(4, "Password harus memiliki minimal 4 karakter"),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
export type TypeRegisterSchema = z.infer<typeof RegisterSchema>