"use client"

import { deleteFlights } from "@/actions/flights"
import { ActionResult } from "@/actions/login"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import { Trash } from "lucide-react"
import { useActionState } from "react"

const initialState: ActionResult = {
    success: false
}

interface FormDeleteFlightProps {
    id: string
}

export const FormDeleteFlight = ({id}: FormDeleteFlightProps) => {
    const deleteAction = deleteFlights.bind(null, id)
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