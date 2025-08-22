import { ReactNode } from "react"

interface HomeLayoutProps {
    children: ReactNode
}

const HomeLayout = ({children}: HomeLayoutProps) => {
    return (
        <main className="text-white font-poppins bg-flysha-black">
            {children}
        </main>
    )
}

export default HomeLayout