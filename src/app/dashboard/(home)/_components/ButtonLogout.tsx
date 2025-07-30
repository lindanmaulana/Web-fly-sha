"use client"

import { AuthLogout } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export const ButtonLogout = () => {
    const handleLogout = async () => {
        await AuthLogout()
    }
    return (
         <Button onClick={handleLogout} variant={"destructive"} className="w-full justify-start">
            <LogOut className="mr-2 h-4" />
            Logout
        </Button>
    )
}