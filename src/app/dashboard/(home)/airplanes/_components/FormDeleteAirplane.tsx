"use client"

import { deleteAirplane } from "@/actions/airplanes"
import { ActionResult } from "@/actions/login"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { Trash } from "lucide-react"
import { useActionState } from "react"

const initialState: ActionResult = {
    success: false
}

interface FormDeleteAirplaneProps {
    id: string
}

export const FormDeleteAirplane = ({id}: FormDeleteAirplaneProps) => {
    const deleteAction = deleteAirplane.bind(null, id)
    const [state, formAction] = useActionState(deleteAction, initialState)

    return (
        <form action={formAction}>
            <input type="text" name="id" defaultValue={id} hidden />
            <ButtonSubmit variant="destructive" textButton="Delete">
                <Trash className="mr-2 size-4" />
            </ButtonSubmit>
        </form>
    )
}