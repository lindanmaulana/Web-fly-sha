import { getSession } from "@/actions/getSession"

const DashboardPage = async () => {
    const session = await getSession()

    console.log({session})
    return (
        <div>
            Wellcome to Dashboard
            <p>hello world</p>
        </div>
    )
}

export default DashboardPage