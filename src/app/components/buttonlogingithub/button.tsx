import { userSessionData } from "@/libs/auth"
import Link from "next/link"

const BtnLogin=()=>{
    return (
        <>
            <div className="button-triger flex gap-3">
                <Link href={'/api/auth/signin'} >sign in</Link>
                <Link href={'/api/auth/signout'} >sign out</Link>
            </div>
        </>
    )
    
}

export default BtnLogin