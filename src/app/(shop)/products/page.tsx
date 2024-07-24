"use client"
import Link from 'next/link'
// import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

    interface PostType{
      id:number,
      title:string,
      price:number,
      description:string,
      category:string, 
      image:string,
      rating:number
    }
export default function Products() {
    //  const  {id}= useParams<{id:string}>()
    const [data,setData]=useState<PostType[] | null>()

    const apiEntryPoint='https://fakestoreapi.com/products'
          const getDatas=async()=>{
              const get=await fetch(apiEntryPoint)
                const res= await get.json()
                    setData(res)
          }
      useEffect(()=>{
           getDatas() 
          
      },[])
  return (
    <div>
        <div className='py-4 mx-6 gap-4 grid xl:grid-cols-4 sm:justify-center sm:grid-cols-1 md:grid-cols-3'>{data?.map(data=>(
            <div key={data.id} className='w-[285px] relative p-3 flex flex-col border-slate-500 border-[2px]'>
              <img src={data.image} alt="" className='w-full h-[250px] object-cover object-center'/>
              <hr className='w-[90px] text-slate-900'/>
              <Link href={`/products/${data.id}`} className='text-white self-end px-4 py-3 rounded-md shadow-sm bg-blue-600 absolute bottom-[30px] right-[30px] hover:shadow-md hover:bottom-[40px] transition-all duration-500'>see detail</Link>
            </div>
        ))}</div>
    </div>
  )
}
