"use client";

import { ActionResult } from "@/actions/login";
import { registerUsers } from "@/actions/users";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";

const initialState: ActionResult = {
    success: false
}

export const FormSignup = () => {
    const [state, formAction] = useActionState(registerUsers, initialState)

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
    <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Complete Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passport" className="font-medium">
            No. Passport
          </label>
          <input
            type="text"
            name="passport"
            id="passport"
            placeholder="Write passport number"
            className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
      </div>
      <Button
        type="submit"
        className="text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-6 transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
      >
        Create New Account
      </Button>
      <Link
        href="signin.html"
        className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Sign In
      </Link>
    </form>
  );
};
