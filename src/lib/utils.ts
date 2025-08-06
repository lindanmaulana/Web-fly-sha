import { FlightSeat, TypeSeat } from "@/generated/prisma";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (flight_id: string) => {
  const SEAT_CLASS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];
  const SEAT_CODE = ["A", "B", "C", "D"];

  const seats: { seat_number: string; type: TypeSeat; flight_id: string }[] =
    [];
  SEAT_CLASS.forEach((className) => {
    SEAT_CODE.forEach((seat) => {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seat_number: seat + i,
          type: className as TypeSeat,
          flight_id,
        });
      }
    });
  });

  return seats;
};


export const dateFormat = (date: Date | string, format: string = 'DD MM YYYY HH:mm') => {
  if(!date) return ""

  const dateFormat = dayjs(date).format(format)

  return dateFormat
}

export const priceFormat = (price: number) => {
  return Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
    maximumFractionDigits: 0
  }).format(price)
}

export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter((seat) => seat.type === "ECONOMY").length
  const totalSeatBusiness = seats.filter((seat) => seat.type === "BUSINESS").length
  const totalSeatFirst = seats.filter((seat) => seat.type === "FIRST").length

  const economy = seats.filter((seat) => seat.type === "ECONOMY" && !seat.is_booked).length
  const business = seats.filter((seat) => seat.type === "BUSINESS" && !seat.is_booked).length
  const first = seats.filter((seat) => seat.type === "FIRST" && !seat.is_booked).length

  return {
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
    economy,
    business, 
    first
  }
}