import { BASE_URL_IMAGE } from "@/lib/supabase/index"

export const getPublicUrl = (bucketName: string, imagePath: string) => {
    
    return `${BASE_URL_IMAGE}/${bucketName}/${imagePath}`
}   