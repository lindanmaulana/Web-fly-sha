import z from "zod";

export const flightsSchema = z.object({
    plane_id: z.string({error: "Pesawat tidak boleh kosong!"}),
    price: z.string({error: "Harga tidak boleh kosong!"}),
    departure_city: z.string({error: "Kode keberangkatan tidak boleh kosong!"}),
    departure_date: z.date(),
    departure_city_code: z.string({error: "Kode kota keberangkatan tidak boleh kosong!"}).min(3, "Kode kota keberangkatan harus memiliki panjang minimal 3 karakter").max(3, "Koda kota keberangkatan maksimal panjang 3 karakter"),
    arrival_date: z.date(),
    destination_city: z.string({error: "kota tujuan tidak boleh kosong!"}),
    destination_city_code: z.string({error: "Kode kota tujuan tidak boleh kosong!"}).min(3, "Kode kota keberangkatan harus memiliki panjang minimal 3 karakter").max(3, "Koda kota keberangkatan maksimal panjang 3 karakter"),
})