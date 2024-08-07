
"use client"
// import { Cookie } from "next/font/google";
// import { cookies } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import { Fragment } from "react";
import { CounterAtom, CounterSelect } from "@/libs/recoil";
import BtnLogin from "../components/buttonlogingithub/button";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { useRecoilValue,useRecoilState } from "recoil";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {
    const navigate=useRouter()
    const {data:session,status}=useSession()
      const [point,setPoint]=useRecoilState(CounterAtom)
      const multiplyPoint=useRecoilValue(CounterSelect)
      useEffect(()=>{
          if(status === "unauthenticated"){
              navigate.push('/login')
          }

      },[status])
  return (
   <div className="">
      <BtnLogin/>
      <h3 className="text-xl">our home</h3>
      <div className="game flex justify-center items-center flex-col gap-3">
              <h1>{session?.user?.name??"belum login"}</h1>
              <h1>counter : {point}</h1>
              <h1>combo : {multiplyPoint}</h1>
              <button onClick={()=>{
                setPoint(point=>point+1)
              }}
              className="px-5 py-2 bg-blue-500 rounded-[10px] text-white"
              >hit me!</button>
      </div>
   </div>
  );
}
