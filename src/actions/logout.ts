"use server"

import { signOut } from "@/auth"

export const AuthLogout = async () => {
    await signOut({redirectTo: "/dashboard/login"})
}