"use client"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useSession } from 'next-auth/react';
// This function can be marked `async` if using `await` inside
    const login=true;
export function middleware(request: NextRequest) {
      const {status}=useSession
      // console.log('middleware excecute : ',request.url)
          //belum login
  if (status === "unauthenticated"){ 
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (status === "authenticated"){ 
    return NextResponse.redirect(new URL('/', request.url))
  }
      // request.cookies.set('name','vika rahmanova nurulianov')
      // console.log('berhasil membuat cookies',request.cookies.get('name'))
  
  // NextResponse.next()'
 
}
// See "Matching Paths" below to learn more
//route yang akan dipasang middleware
export const config = {
  matcher: [
    '/products/:path*',
    '/'
  ],
}