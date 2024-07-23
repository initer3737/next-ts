"use client"
import { useParams } from 'next/navigation'
import React, { Fragment,useState,useEffect } from 'react'

interface PostType{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string, 
  image:string,
  rate:number
}

export default function Id() {
    const params = useParams<{ id: string}>()
    const [data,setData]=useState<PostType | null>()

    const apiEntryPoint=`https://fakestoreapi.com/products/${params.id}`
          const getDatas=async()=>{
              const get=await fetch(apiEntryPoint)
                const res= await get.json()
                    setData(res)
          }
      useEffect(()=>{
           getDatas() 
          
      },[])

  return (
    <Fragment>
      <div className='h-[100vh] my-5 mx-6 flex flex-row  items-center justify-center'>
       <img src={data?.image} alt="" className='w-[200px]' />
       <div>
          <p>{data?.title}</p>
          <p>price: ${data?.price}</p>
          <p>rate: {data?.rate}</p>
          <p className=''>{data?.description}</p>
       </div>
      </div>


      <div className="hidden justify-center items-center">
        page adalah entry point kita ,sama seperti index.html [halaman utama] 
        
      </div>
    </Fragment>
  )
}
