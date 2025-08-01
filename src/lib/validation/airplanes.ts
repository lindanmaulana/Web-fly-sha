import z, { ZodType } from "zod";

export const airplaneSchema = z.object({
    id: z.number(),
    code: z.string(),
    image: z.string(),
    name: z.string()
})

export type TypeAirplaneSchema = z.infer<typeof airplaneSchema>


const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png'
]

const MAX_FILE_SIZE = 2000000 // 2mb


export const airplanesSchema = z.object({
    code: z.string({error: "Kode pesawat tidak boleh kosong!"}).regex(/^[A-Z]{3}-[0-9]{3}$/, "Format kode harus [XXX-111]"),
    name: z.string({error: "Nama pesawat tidak boleh kosong!"}).min(4),
    image: z.any().refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), "Image harus ber type JPEG, JPG, dan PNG").refine((file) => file.size <= MAX_FILE_SIZE, "Ukuran maksimal 2mb"),
})
export type TypeAirplaneCreateSchema = z.infer<typeof airplanesSchema>