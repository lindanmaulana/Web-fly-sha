import {createClient} from "@supabase/supabase-js"

const SUPABASEURL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const SUPABASEKEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""

const supabase = createClient(
    SUPABASEURL, SUPABASEKEY
)

export default supabase