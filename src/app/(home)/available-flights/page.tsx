import Image from "next/image";
import Link from "next/link";
import { FilterClass } from "./_components/FilterClass";
import { FilterFlight } from "./_components/FilterFlight";
import { FilterAirlane } from "./_components/FilterAirlane";
import { ListFlights } from "./_components/ListFlights";
import { Suspense } from "react";
import { LoadingFilterAirlane } from "./_components/LoadingFilterAirlane";

export default function AvailableFlightsPage() {
  return (
    <>
        <section id="Header" className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative">
            <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
                <nav id="Navbar" className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px]"> 
                    <Link href="index.html" className="flex items-center shrink-0">
                        <Image src="/assets/images/logos/logo.svg" alt="logo" width={120} height={60} />
                    </Link>
                    <ul className="nav-menus flex gap-[30px] items-center w-fit">
                        <li>
                            <Link href="" className="font-medium">Flash Sale</Link>
                        </li>
                        <li>
                            <Link href="" className="font-medium">Discover</Link>
                        </li>
                        <li>
                            <Link href="" className="font-medium">Packages</Link>
                        </li>
                        <li>
                            <Link href="" className="font-medium">Stories</Link>
                        </li>
                        <li>
                            <Link href="" className="font-medium">About</Link>
                        </li>
                        <Link href="" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-12 transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center">AR</Link>
                    </ul>
                </nav>
                <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
                    <h1 className="font-bold text-[32px] leading-[48px]">Jakarta to Shanghai</h1>
                    <p className="font-medium text-lg leading-[27px]">183,042 flights avaiable</p>
                </div>
                <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
            </div>
        </section>

        <section id="Content" className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative pb-[105px]">
            <div className="flex w-full">
                <form className="ticket-filter flex flex-col shrink-0 w-[230px] gap-[30px] text-flysha-off-purple">
                    <FilterClass />
                    <FilterFlight />
                    <Suspense fallback={<LoadingFilterAirlane />}>
                        <FilterAirlane />
                    </Suspense>
                </form>
                <ListFlights />
            </div>
        </section>
    </>
  )
}
