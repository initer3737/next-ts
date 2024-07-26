
import { Cookie } from "next/font/google";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import BtnLogin from "../components/buttonlogingithub/button";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Home() {
    const userData=await getServerSession(authOptions)
    console.log(`user data `+useSession)
  return (
   <>
   {`user data : ${userData?.user?.email}`}
      <BtnLogin/>
      <h3 className="text-xl">our home</h3>
   </>
  );
}
