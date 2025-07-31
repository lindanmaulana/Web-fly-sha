import supabase from "@/lib/supabase"

export const uploadFile = async (file: File) => {
    try {
        const bucketName = "flysha"
        const fileName = `${Date.now()}-${file.name}`

        const {data, error} = await supabase.storage.from(bucketName).upload(`/public/airplanes/${fileName}`, file, {
            cacheControl: "3600",
            upsert: false
        })

        if(error) throw new Error(error.message)

        return data.path
    } catch (err) {
        console.log({err})

        return err
    }
}