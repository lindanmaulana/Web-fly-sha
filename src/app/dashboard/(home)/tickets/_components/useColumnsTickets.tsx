"use client";

import { Flight, FlightSeat, Ticket, User } from "@/generated/prisma";
import { TicketsWithRelation } from "@/lib/types/type";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { ColumnRouteFlight } from "../../flights/_components/ColumnRouteFlight";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TicketType = Ticket & {
  flight: Flight;
  customer: User;
  seat: FlightSeat;
};

export const useColumnsTickets = () => {
  const columns = useMemo(() => {
    const column: ColumnDef<TicketsWithRelation>[] = [
      {
        accessorKey: "customer_id",
        header: "Nama Penumpang",
        cell: ({ row }) => {
          const ticket = row.original;

          return ticket.customer.name;
        },
      },
      {
        accessorKey: "flight_id",
        header: "Penerbangan",
        cell: ({ row }) => {
          const ticket = row.original;

          return <ColumnRouteFlight flight={ticket.flight} />;
        },
      },
      {
        accessorKey: "seat_id",
        header: "Nomor Kursi",
        cell: ({ row }) => {
          const ticket = row.original;

          return <Badge>{ticket.seat.seat_number}</Badge>;
        },
      },
      {
        id: "status_transactions",
        header: "Status Transaksi",
        cell: ({ row }) => {
          const ticket = row.original;

          return (
            <div className="space-y-1">
              <Badge
                className={cn(
                  ticket.status === "SUCCESS"
                    ? "bg-green-500"
                    : ticket.status === "PENDING"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                )}
              >
                {ticket.status}
              </Badge>
            </div>
          );
        },
      },
    ];

    return column;
  }, []);

  return columns;
};
