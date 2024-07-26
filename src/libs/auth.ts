import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
authOptions

const userSessionData=async()=>{

    const userSession=await getServerSession(authOptions)
    return userSession?.user
}

export {
    userSessionData
}