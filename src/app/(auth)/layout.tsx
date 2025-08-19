import { Metadata } from "next"
import { ReactNode } from "react"
import { CompanyLogos } from "../_components/CompanyLogos"

interface LayoutAuthProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Flysha - Website booking ticket"
}

const LayoutAuth = ({children}: LayoutAuthProps) => {
    return (
        <main className="text-white font-poppins bg-flysha-black">
            <section id="Signup" className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10 min-h-screen">
                <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0 min-h-screen">
                    <div className="flex flex-col justify-between min-h-[calc(100vh-78px)]">
                        {children}
                        <CompanyLogos />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LayoutAuth