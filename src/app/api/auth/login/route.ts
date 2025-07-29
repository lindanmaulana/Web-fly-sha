import { AuthServices } from "@/lib/services/auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json()
        const result = await AuthServices.Login(reqBody)

        return NextResponse.json(result, {status: 200})
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred"
        return NextResponse.json({
            error: message
        }, {status: 500})
    }
}