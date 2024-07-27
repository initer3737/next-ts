"use client"
import { signIn,signOut,useSession } from "next-auth/react"
import Link from "next/link"

const BtnLogin=()=>{
        const {data:session,status}=useSession()
                if(status === 'authenticated'){
                        return (
                            <div className="flex gap-4 justify-center flex-col items-center">
                                <p>nama : {session.user?.email}</p>
                                <p>username : {session.user?.name}</p>
                                <img src={session.user?.image!} alt="" className="w-[400px]" />
                                <button  onClick={()=>signOut()}>logout</button>
                            </div>
                        )
                    }

    return (
        <>
            <div className="button-triger flex gap-3">
                <Link href={'/api/auth/signin'} >sign in</Link>
                <Link href={'/api/auth/signout'} >sign out</Link>
                <button  onClick={()=>signIn("github")}>testo</button>
            </div>
        </>
    )
    
}

export default BtnLogin