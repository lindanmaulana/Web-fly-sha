import { Prisma } from "@/generated/prisma";


export type FlightsWithPlane = Prisma.FlightGetPayload<{
    include: {
        plane: true,
        seats: true
    }
}>