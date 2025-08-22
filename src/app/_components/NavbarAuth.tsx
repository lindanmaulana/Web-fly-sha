import { getSession } from "@/actions/getSession"
import { signOut } from "@/auth"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { LogOut } from "lucide-react"
import Link from "next/link"

export const NavbarAuth = async () => {
    const session = await getSession()
    console.log({session})
    return (
        <div className="inline-flex  items-center gap-3">

            {session && session.role === "CUSTOMER" ? (
                <Link href="/my-tickets" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">My Tickets</Link>
            ) : (
                <Link href="/sign-in" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Sign In</Link>
            )}

            {session && session.role === "CUSTOMER" && (
                <form action={async () => {
                    "use server"

                    await signOut()
                }}>
                    <ButtonSubmit variant="destructive" textButton=""><LogOut className="size-4" /></ButtonSubmit>
                </form>
            )}

            {session && session.role === "ADMIN" && (
                <Link href="/dashboard" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Dashboard</Link>
            )}
        </div>
    )
}