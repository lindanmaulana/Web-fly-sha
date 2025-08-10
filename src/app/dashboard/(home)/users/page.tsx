import { getAllUsers } from "@/actions/users"
import { Metadata } from "next"
import { TableUsers } from "./_components/TableUsers"

export const metadata: Metadata = {
    title: "Dashboard | Users"
}

const PageUsers = async () => {
    const data = await getAllUsers()
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Users</div>
            </div>
            
            <TableUsers data={data} />
        </>
    )
}

export default PageUsers