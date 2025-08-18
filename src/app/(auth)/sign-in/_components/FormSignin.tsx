"use client"

import { ActionResult } from "@/actions/login"
import { loginUsers } from "@/actions/users"
import { ButtonSubmit } from "@/components/ButtonSubmit"
import Link from "next/link"
import { useActionState } from "react"

const initialState: ActionResult = {
    success: false
}

export const FormSignin = () => {
    const [state, formAction] = useActionState(loginUsers, initialState)

    return (
        <form action={formAction} className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5">
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
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Write your email" className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-medium">Password</label>
                <input type="password" name="password" id="password" placeholder="Type your password" className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
            </div>
            <ButtonSubmit textButton="Sign In" style="text-lg font-normal text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-6 transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]" />
            <Link href="/sign-up" className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300">Create New Account</Link>
        </form>
    )
}