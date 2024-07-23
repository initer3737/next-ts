"use client"
import React from 'react'


const HandleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault;
}


function Login() {
  return (
    <div>
        <form className='bg-slate-500 px-3 py-5 my-[50px] mx-[50px] rounded-md shadow flex flex-col gap-4 justify-center items-center w-[400px] h-full' onSubmit={(e)=>HandleSubmit(e)}>
            <div className="input flex flex-col">
              <label htmlFor="username" className='text-white'>username</label>
              <input type="text" placeholder='username' id='username' required/>
            </div>
            <div className="input flex flex-col">
              <label htmlFor="password" className='text-white'>password</label>
              <input type="password" id='password' placeholder='password' required/>
            </div>
                  <button className='bg-blue-500 px-4 py-2 rounded-md shadow text-white'>login</button>
        </form>
    </div>
  )
}

export default Login