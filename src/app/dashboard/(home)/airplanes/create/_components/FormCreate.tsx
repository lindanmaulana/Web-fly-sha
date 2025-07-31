"use client"

import { createAirplane } from "@/actions/airplanes"
import { ActionResult } from "@/actions/login"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"

const initialState: ActionResult = {
    success: false
}
export const FormCreate = () => {
    const [state, formAction] = useActionState(createAirplane, initialState)
    const router = useRouter()

    useEffect(() => {
        if(state.success) router.replace("/dashboard/airplanes")
            else router.refresh()
    }, [router, state.success])

    return (
        <form action={formAction} className="w-[40%] space-y-4">
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
            <div className="space-y-2">
                <Label htmlFor="code">Code</Label>
                <Input placeholder="Kode pesawat..." name="code" id="code" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="name">Nama Pesawat</Label>
                <Input placeholder="Nama pesawat..." name="name" id="name" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Upload foto</Label>
                <Input type="file" placeholder="Upload foto..." name="image" id="image" required />
            </div>

            <ButtonSubmit />
        </form>
    )
}