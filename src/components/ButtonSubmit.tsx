"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import { ReactNode } from "react"

interface ButtonSubmitProps {
    textButton?: string
    textLoading?: string
    style?: string
    variant?: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary"
    children?: ReactNode
}
export const ButtonSubmit = (props: ButtonSubmitProps) => {
    const {textButton = "Submit", textLoading = "Loading...", style, variant = "default", children} = props
    const {pending} = useFormStatus()

    return (
        <Button size={"sm"} type="submit" variant={variant} className={`w-full ${style}`} disabled={pending}>{pending ? textLoading : (
            <>
                {children} {textButton}
            </>
        )}</Button>
    )
}