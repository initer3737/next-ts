
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

export default function Home() {
    console.log(`user data `+useSession)
      const [point,setPoint]=useRecoilState(CounterAtom)
      const multiplyPoint=useRecoilValue(CounterSelect)
  return (
   <div className="">
      <BtnLogin/>
      <h3 className="text-xl">our home</h3>
      <div className="game flex justify-center items-center flex-col gap-3">
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
