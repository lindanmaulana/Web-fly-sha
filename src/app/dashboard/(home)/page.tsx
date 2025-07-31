import { getSession } from "@/actions/getSession"

const DashboardPage = async () => {
    const session = await getSession()

    console.log({session})
    return (
        <div>Dashboard Page</div>
    )
}

export default DashboardPage