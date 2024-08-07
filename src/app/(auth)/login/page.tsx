"use client"
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const HandleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault;
}


function Login() {
    const navigate=useRouter()
   const {data:session,status}=useSession()
        useEffect(()=>{
          if(status === "authenticated"){
                navigate.push("/")
          }
          if(status === "unauthenticated"){
                navigate.push("/login")
          }
        },[status])
  return (
    <div>
        <form className='bg-slate-500 px-3 py-5 my-[50px] mx-[50px] rounded-md shadow flex flex-col gap-4 justify-center items-center w-[400px] h-full' onSubmit={(e)=>HandleSubmit(e)}>
                <div>{status}</div>
            <div className="input flex flex-col">
              <label htmlFor="username" className='text-white'>username</label>
              <input type="text" placeholder='username' id='username' required/>
            </div>
            <div className="input flex flex-col">
              <label htmlFor="password" className='text-white'>password</label>
              <input type="password" id='password' placeholder='password' required/>
            </div>
                  <button className='bg-blue-500 px-4 py-2 rounded-md shadow text-white' onClick={()=>{
                    signIn("github")
                  }}>login</button>
        </form>
    </div>
  )
}

export default Login