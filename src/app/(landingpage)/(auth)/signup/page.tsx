import Image from "next/image"
import Link from "next/link"

const PageAuth = () => {
    return (
        <div className="flex flex-col justify-between min-h-[calc(100vh-78px)]">
                        <div className="form-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[30px] mt-[53px]">
                            <div className="title flex flex-col gap-1">
                                <h1 className="font-bold text-[32px] leading-[48px]">Sign Up</h1>
                                <p className="font-medium text-lg leading-[27px]">Enjoy new experience of flight</p>
                            </div>
                            <form className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-medium">Complete Name</label>
                                        <input type="text" name="name" id="name" placeholder="Write your name" className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="passport" className="font-medium">No. Passport</label>
                                        <input type="text" name="passport" id="passport" placeholder="Write passport number" className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 ring-flysha-light-purple" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="font-medium">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="Write your email" className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 ring-flysha-red" />
                                    <span className="error-messages font-medium text-xs text-flysha-red font-inter">Wrong format email address</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="password" className="font-medium">Email Address</label>
                                    <input type="password" name="password" id="password" placeholder="Type your password" className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple" />
                                    <span className="error-messages font-medium text-xs text-flysha-red font-inter">Wrong format email address</span>
                                </div>
                                <Link href="signin.html" className="text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Create New Account</Link>
                                <Link href="signin.html" className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300">Sign In</Link>
                            </form>
                        </div>
                        <div className="company-logos w-full flex items-center py-[50px] bottom-0 overflow-hidden">
                            <div className="slider flex shrink-0 w-max">
                                <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                </div>
                                <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                </div>
                                <div className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center">
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum1.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum2.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum3.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                    <div className="flex w-fit h-[30px] shrink-0">
                                        <Image src="/assets/images/logos/logoipsum4.png" className="w-full h-full object-contain" width={120} height={80} alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default PageAuth