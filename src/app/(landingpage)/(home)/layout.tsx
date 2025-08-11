import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface LayoutHomeProps {
    children: ReactNode
}
const LayoutHome = ({children}: LayoutHomeProps) => {
    return (
        <main className="text-white font-poppins bg-flysha-black">
            <section id="Header" className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10">
                <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
                    <nav id="Navbar" className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px]"> 
                        <Link href="index.html" className="flex items-center shrink-0">
                            <Image src="/assets/images/logos/logo.svg" width={120} height={80} alt="logo" />
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
                            <Link href="signin.html" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Sign In</Link>
                        </ul>
                    </nav>
                    <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
                        <div className="title flex flex-col gap-[30px]">
                            <h1 className="font-extrabold text-[80px] leading-[90px]">Best Flights. <br />Cheaper Budget.</h1>
                            <p className="font-medium text-lg leading-[36px]">No more long queue, get more delicious heavy meals. <br />Crafted by best talented people around the world.</p>
                        </div>
                        <form className="bg-white text-flysha-black w-full flex justify-between items-center rounded-[20px] p-5">
                            <div className="flex gap-[50px] items-center p-5">
                                <div className="flex flex-col justify-center gap-[14px]">
                                    <label htmlFor="departure" className="text-lg">Departure</label>
                                    <div className="flex gap-[10px]">
                                        <div className="flex items-center w-8 h-8 shrink-0">
                                            <Image src="/assets/images/icons/airplane.svg" width={120} height={80} alt="icon" />
                                        </div>
                                        <select name="departure" id="departure" className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]">
                                            <option value="jkt" selected>Jakarta</option>
                                            <option value="sby">Surabaya</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="border border-[#EDE8F5] h-[60px]" />
                                <div className="flex flex-col justify-center gap-[14px]">
                                    <label htmlFor="arrival" className="text-lg">Arrival</label>
                                    <div className="flex gap-[10px]">
                                        <div className="flex items-center w-8 h-8 shrink-0">
                                            <Image src="/assets/images/icons/airplane.svg" width={120} height={80} alt="icon" />
                                        </div>
                                        <select name="arrival" id="arrival" className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]">
                                            <option value="shg" selected>Shanghai</option>
                                            <option value="bei">Beijing</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="border border-[#EDE8F5] h-[60px]" />
                                <div className="flex flex-col justify-center gap-[14px]">
                                    <label htmlFor="date" className="text-lg">Departure Date</label>
                                    <div className="flex gap-[10px]">
                                        <div className="flex items-center w-8 h-8 shrink-0">
                                            <Image src="/assets/images/icons/calendar.svg" width={120} height={80} alt="icon" />
                                        </div>
                                        <input type="date" name="date" id="date" className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0" />
                                    </div>
                                </div>
                            </div>
                            <Link href="signup.html" className="font-bold text-2xl leading-9 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px]  transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Explore Now</Link>
                        </form>
                    </div>
                    <div className="company-logos w-full flex items-center py-[50px] overflow-hidden">
                        <div className="flex slider shrink-0 w-max">
                            <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                            </div>
                            <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                            </div>
                            <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum1.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum2.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum3.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                                <div className="flex w-fit h-[30px] shrink-0">
                                    <Image src="/assets/images/logos/logoipsum4.png" className="object-contain w-full h-full" width={120} height={80} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
            <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-flysha-light-purple p-[100px_10px_30px]">
                <div className="container max-w-[1130px] mx-auto flex justify-between relative">
                    <Image src="/assets/images/icons/Ellipse 4.png" className="absolute h-[300px] -top-[45px] -left-[20px] z-0" width={120} height={80} alt="icon" />
                    <div className="z-10 flex shrink-0 h-fit">
                        <Image src="/assets/images/logos/logo.svg" width={120} height={80} alt="" />
                    </div>
                    <div className="flex gap-[100px] z-10">
                        <div className="flex flex-col gap-5">
                            <p className="text-lg font-bold">Explore</p>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Services</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Testimonials</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Pricing</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">About</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg font-bold">Services</p>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Pickup at Home</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">First Lounge Plus</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Business Room</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Bentley Power</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg font-bold">About</p>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Company Profile</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Our Investors</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Media Press</Link>
                            <Link href="" className="font-medium transition-all duration-300 hover:font-semibold hover:text-flysha-light-purple">Careers</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg font-bold">Connect</p>
                            <Link href="" className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"><Image src="/assets/images/icons/call.svg" width={25} height={25} alt="icon" />+1 2208 1996</Link>
                            <Link href="" className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"><Image src="/assets/images/icons/dribbble.svg" width={25} height={25} alt="icon" />buildwithangga</Link>
                            <Link href="" className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"><Image src="/assets/images/icons/sms.svg" width={25} height={25} alt="icon" />team@bwa.com</Link>
                        </div>
                    </div>
                </div>
                <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">All Rights Reserved. Copyright BuildWithAngga 2024.</p>
            </footer>
        </main>
    )
}

export default LayoutHome