"use client"

import { createAirplane, updateAirplane } from "@/actions/airplanes"
import { ActionResult } from "@/actions/login"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Airplane } from "@/generated/prisma"
import Image from "next/image"
import { useActionState } from "react"

const initialState: ActionResult = {
    success: false
}

interface FormEditProps {
    type: "ADD" | "EDIT"
    defaultValue?: Airplane | null
}

export const FormAirplanes = ({type, defaultValue}: FormEditProps) => {
    const updateAirplaneWithId = (_state: ActionResult, formData: FormData) => updateAirplane(null, defaultValue?.id, formData)

    const [state, formAction] = useActionState(type === "ADD" ? createAirplane : updateAirplaneWithId, initialState)

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
                <Input placeholder="Kode pesawat..." name="code" id="code" defaultValue={defaultValue?.code} required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="name">Nama Pesawat</Label>
                <Input placeholder="Nama pesawat..." name="name" id="name" defaultValue={defaultValue?.name} required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Upload foto</Label>
                {type === "EDIT" && defaultValue && (
                    <Image src={defaultValue?.image} alt={defaultValue?.name} width={100} height={100} className="w-full h-full" />
                )}

                <Input type="file" placeholder="Upload foto..." name="image" id="image" required={type === "ADD"} />
            </div>

            <ButtonSubmit />
        </form>
    )
}