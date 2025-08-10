-- DropForeignKey
ALTER TABLE "FlightSeat" DROP CONSTRAINT "FlightSeat_flight_id_fkey";

-- AddForeignKey
ALTER TABLE "FlightSeat" ADD CONSTRAINT "FlightSeat_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flight"("id") ON DELETE CASCADE ON UPDATE CASCADE;
