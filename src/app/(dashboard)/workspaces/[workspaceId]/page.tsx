import { getCurrent } from "@/features/auth/queries"
import { redirect } from "next/navigation"


const WorkspaceIdPage = async ({params}) => {
    const user = await getCurrent()
    if (!user) redirect("/sign-in")

    return (
        <div>
            WorkspaceIdPage {params.workspaceId}
        </div>
    )
}

export default WorkspaceIdPage