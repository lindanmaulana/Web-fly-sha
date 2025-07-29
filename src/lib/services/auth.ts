import { LoginSchema } from "@/lib/validation/auth";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";
import { LoginRequest } from "../models/auth";

export class AuthServices {
  static async Login(req: LoginRequest) {
    const validatedFields = LoginSchema.parse(req);

    const result = await prisma.user.findFirst({
      where: { email: validatedFields.email },
    });

    if (!result) throw new Error("Invalid credentials!");

    if(result.password && validatedFields.password) {
        const validPassword = await bcrypt.compare(validatedFields.password, result.password)
    
        if(!validPassword) throw new Error("Invalid credentials!")
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...safeResult} = result

    console.log("LOLOS SEMUA VALIDASI LOGIN!")

    return safeResult;
  }
}