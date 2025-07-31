const BUCKET_AIRPLANES = "flysha"
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const BASE_URL_IMAGE = `${SUPABASE_URL}/storage/v1/object/public`

export {
    BUCKET_AIRPLANES,
    SUPABASE_URL,
    BASE_URL_IMAGE
}