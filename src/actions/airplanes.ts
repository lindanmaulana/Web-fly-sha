"use server"

import { errorHandler } from "@/lib/utils/errorHandler"
import { airplanesCreateSchema } from "@/lib/validation/airplanes"
import prisma from "../../lib/prisma"
import { ActionResult } from "./login"
import { revalidatePath } from "next/cache"
import { uploadFile } from "./uploadFile"
import { getPublicUrl } from "@/lib/supabase/getPublicUrl"
import { BUCKET_AIRPLANES } from "../lib/supabase/index"

export const getAllAirplanes = async () => {
    try {
        const result = await prisma.airplane.findMany()

        const dataAirplanesFullUrl  = result.map(airplane => ({
            ...airplane,
            image: airplane.image ? getPublicUrl(BUCKET_AIRPLANES, airplane.image) : "/image/placeholder.png"
        }))

        return dataAirplanesFullUrl
    } catch (err) {
        const errorMessage = errorHandler(err)

        console.log({errorMessage})
        return []
    }
}


export const createAirplane = async (prevState: unknown, formData: FormData): Promise<ActionResult> => {
    const validatedFields = airplanesCreateSchema.safeParse({
        code: formData.get("code"),
        name: formData.get("name"),
        image: formData.get("image")
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
        const imageUpload = await uploadFile(validatedFields.data.image)

        console.log({imageUpload})
        if(imageUpload instanceof Error) {
            return {
                success: false,
                errorTitle: "Failed to upload file",
                errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi.']
            }
        }

        const data = await prisma.airplane.create({
            data: {
                name: validatedFields.data.name,
                code: validatedFields.data.code,
                image: imageUpload as string
            }
        })

        revalidatePath("/dashboard/airplanes")
        return {
            success: true
        }
    } catch (err) {
        const errorDesc: string = errorHandler(err)

        return {
            success: false,
            errorTitle: "Failed insert data",
            errorDesc: [errorDesc]
        }
    }
}