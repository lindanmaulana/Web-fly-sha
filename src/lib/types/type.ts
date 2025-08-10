import { Prisma } from "@/generated/prisma";


export type FlightsWithPlane = Prisma.FlightGetPayload<{
    include: {
        plane: true,
        seats: true
    }
}>

export type TicketsWithRelation = Prisma.TicketGetPayload<{
    include: {
        flight: true,
        customer: true,
        seat: true
    }
}>

export type UsersWithoutPassword = Prisma.UserGetPayload<{
    omit: {
        password: true
    }
}>