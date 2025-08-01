"use server"

import { getPublicUrl } from "@/lib/supabase/getPublicUrl"
import { errorHandler } from "@/lib/utils/errorHandler"
import { airplaneSchema, airplanesSchema } from "@/lib/validation/airplanes"
import { revalidatePath } from "next/cache"
import prisma from "../../lib/prisma"
import { BUCKET_AIRPLANES } from "../lib/supabase/index"
import { ActionResult } from "./login"
import { uploadFile } from "./uploadFile"
import { redirect } from "next/navigation"

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


export const getOneAirplanes = async (id: string) => {
    try {
        const result = await prisma.airplane.findFirst({where: {id}})

        const dataAirplanesFullUrl = {
            ...result,
            image: result?.image ? getPublicUrl(BUCKET_AIRPLANES, result.image) : "/image/placeholder.png"
        }

        return dataAirplanesFullUrl
    } catch (err) {
        const errorMessage = errorHandler(err)
        console.log({errorMessage})
        return null
    }
}


export const createAirplane = async (prevState: unknown, formData: FormData): Promise<ActionResult> => {
    const validatedFields = airplanesSchema.safeParse({
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

    const image = validatedFields.data.image as unknown as File

    try {
        const imageUpload = await uploadFile(image)

        if(imageUpload instanceof Error) {
            return {
                success: false,
                errorTitle: "Failed to upload file",
                errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi.']
            }
        }

        await prisma.airplane.create({
            data: {
                name: validatedFields.data.name,
                code: validatedFields.data.code,
                image: imageUpload as string
            }
        })

        revalidatePath("/dashboard/airplanes")

        redirect("/dashboard/airplanes")
    } catch (err) {
        const errorDesc: string = errorHandler(err)

        return {
            success: false,
            errorTitle: "Failed insert data",
            errorDesc: [errorDesc]
        }
    }
}

export const updateAirplane = async (prevState: unknown, formData: FormData, id: string): Promise<ActionResult> => {
    const dataUpdate = Object.fromEntries(formData)
    const image = formData.get("image") as File
    
    let validated;
    const airplaneUpdate: {
        code?: string
        name?: string
        image?: string
    } = {}

    if(image.size === 0) {
        validated = airplanesSchema.omit({image: true})
    } else {
        validated = airplanesSchema
    }

    const validatedFields = validated.safeParse(dataUpdate)

    console.log({validatedFields, dataUpdate})
    if(!validatedFields.success) {
        const errorDesc = validatedFields.error.issues.map((issue) => issue.message)
        return {
            success: false,
            errorTitle: "Error validasi",
            errorDesc
        }
    }

    if(image.size > 0) {
        const imageUpload = await uploadFile(image)
    
        if(imageUpload instanceof Error) {
            return {
                success: false,
                errorTitle: "Failed to upload file",
                errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi.']
            }
        }
    
        airplaneUpdate.image = imageUpload as string
    }

    if(validatedFields.data.code) airplaneUpdate.code = validatedFields.data.code

    if(validatedFields.data.name) airplaneUpdate.name = validatedFields.data.name

    try {

        await prisma.airplane.update({
            where: {
                id
            },

            data: airplaneUpdate
        })

        revalidatePath("/dashboard/airplanes")
        redirect("/dashboard/airplanes")
    } catch (err) {
        const errorMessage = errorHandler(err)

        return {
            success: false,
            errorTitle: "Failed update data",
            errorDesc: [errorMessage]
        }
    }
}


// logic 1 update
    // const image = formData.get("image") as File

    // let validatedFieldsUpdate;

    // if(image.size === 0) {
    //     validatedFieldsUpdate = airplaneSchema.omit({image: true})
    // } else {
    //     validatedFieldsUpdate = airplaneSchema
    // }

    // const validatedFields = validatedFieldsUpdate.safeParse({
    //     code: formData.get("code"),
    //     name: formData.get("name"),
    //     image: formData.get("image")
    // })

    // if(!validatedFields.success) {
    //     const errorDesc = validatedFields.error.issues.map((issue) => issue.message)
    //     return {
    //         success: false,
    //         errorTitle: "Error validasi",
    //         errorDesc
    //     }
    // }

    // let fileName: string = ""
    // if(image.size > 0) {
    //     const imageUpload = await uploadFile(image)

    //     if(imageUpload instanceof Error) {
    //         return {
    //             success: false,
    //             errorTitle: "Failed to upload file",
    //             errorDesc: ['Terjadi masalah pada koneksi, silahkan coba lagi.']
    //         }
    //     }
        

    //     fileName = imageUpload as string
    // }