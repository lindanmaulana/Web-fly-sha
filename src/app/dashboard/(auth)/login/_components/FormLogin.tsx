"use client"

import { ActionResult, AuthLoginCredentials } from "@/actions/login"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { REDIRECT_USER } from "@/lib/routes"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"

const initialState: ActionResult = {
    success: false,
}

export const FormLogin = () => {
    const [state, formAction, pending] = useActionState(AuthLoginCredentials, initialState)
    const router = useRouter()
    
    
    useEffect(() => {
        const handleRedirect = () => {
            if(state.success) router.replace(REDIRECT_USER)
        }

        handleRedirect()
    }, [state, router])

    return (
        <form action={formAction} className="space-y-6">
            {state.errorTitle && state.errorDesc && (
                <div className="space-y-2 bg-red-500 px-4 py-3 rounded-md">
                    <div className="text-white font-bold">{state.errorTitle}</div>

                    <ul className="text-sm list-disc pl-4 text-white">
                        {state.errorDesc.length > 1 ? state.errorDesc.map(err => (
                            <li key={err}>{err}</li>
                        )): (
                            <li>{state.errorDesc}</li>
                        )}
                    </ul>
                </div>
            )}
            <Input type="email" placeholder="Email..." name="email" required />
            <Input type="password" placeholder="Password..." name="password" required />

            <Button type="submit" className="w-full cursor-pointer" disabled={pending}>{pending ? "Loading..." : "Submit"}</Button>
        </form>
    )
}