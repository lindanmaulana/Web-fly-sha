"use client"

import { AuthLogout } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export const ButtonLogout = () => {
    return (
        <form action={AuthLogout}>
            <Button type="submit" variant={"destructive"} className="w-full justify-start">
                <LogOut className="mr-2 h-4" />
                Logout
            </Button>
        </form>
    )
}