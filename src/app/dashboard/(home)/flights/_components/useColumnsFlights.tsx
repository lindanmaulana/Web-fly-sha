"use client";

import { Button } from "@/components/ui/button";
import { Flight, FlightSeat } from "@/generated/prisma";
import { getPublicUrl } from "@/lib/supabase/getPublicUrl";
import { BUCKET_AIRPLANES } from "@/lib/supabase/index";
import { FlightsWithPlane } from "@/lib/types/type";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ColumnRouteFlight } from "./ColumnRouteFlight";
import { ColumnSeatPrice } from "./ColumnSeatPrice";
import { FormDeleteFlight } from "./FormDeleteFlight";

export interface FlightColumn {
  flight: Flight;
  seat: FlightSeat[];
}

export const useColumnsFlights = () => {
  const columns = useMemo(() => {
    const column: ColumnDef<Flight>[] = [
      {
        accessorKey: "plane_id",
        header: "Pesawat",
        cell: ({ row }) => {
          const flight = row.original as FlightsWithPlane;

          const imageUrl = getPublicUrl(BUCKET_AIRPLANES, flight.plane.image);

          return (
            <div className="inline-flex items-center gap-5">
              <Image
                src={imageUrl}
                alt={flight.plane.name}
                width={120}
                height={120}
                className="rounded-xl"
              />
              <h4 className="font-bold">{flight.plane.name}</h4>
            </div>
          );
        },
      },
      {
        accessorKey: "departure_city",
        header: "Rute",
        cell: ({ row }) => {
          const flight = row.original;

          return <ColumnRouteFlight flight={flight} />;
        },
      },
      {
        accessorKey: "price",
        header: "Harga / Kursi",
        cell: ({ row }) => {
          const flight = row.original as FlightsWithPlane;

          return (
            <ColumnSeatPrice flight={{ flight: flight, seat: flight.seats }} />
          );
        },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const flight = row.original;

          return (
            <div className="inline-flex gap-5 items-center">
              <Button variant={"secondary"} size={"sm"} asChild>
                <Link href={`/dashboard/flights/edit/${flight.id}`}>
                  <Pencil className="mr-2 size-4" /> Edit
                </Link>
              </Button>

              <FormDeleteFlight id={flight.id} />
            </div>
          );
        },
      },
    ];

    return column;
  }, []);

  return columns;
};
