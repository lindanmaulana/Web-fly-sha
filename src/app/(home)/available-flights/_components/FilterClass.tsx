"use client";

import type { TypeSeat } from "@/generated/prisma";

const SEAT_OPTIONS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];

export const FilterClass = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Seat Class</p>
      {SEAT_OPTIONS.map((seat, index) => (
        <label
          key={`${seat}-${index}`}
          htmlFor={seat}
          className="font-semibold flex items-center gap-[10px] has-[:checked]:text-white"
        >
          <input
            type="radio"
            name="seat"
            id={seat}
            value={seat}
            className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
          />
          {seat}
        </label>
      ))}
    </div>
  );
};
