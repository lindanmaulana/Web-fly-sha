"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

interface ButtonSubmitProps {
    textButton?: string
    textLoading?: string
    style?: string
}
export const ButtonSubmit = (props: ButtonSubmitProps) => {
    const {textButton = "Submit", textLoading = "Loadiing...", style} = props
    const {pending} = useFormStatus()

    return (
        <Button type="submit" className={`w-full ${style}`} disabled={pending}>{pending ? textLoading : textButton}</Button>
    )
}