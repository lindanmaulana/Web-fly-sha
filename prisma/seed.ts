import { PrismaClient } from '../src/generated/prisma'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash("admin123", 8)

    const userSeed  = await prisma.user.create({
        data: {
            email: "admin@gmail.com",
            name: "admin",
            role: "ADMIN",
            password: password
        }
    })

    console.log({userSeed})
}

main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })