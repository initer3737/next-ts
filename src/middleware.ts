import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
    const login=true;
export function middleware(request: NextRequest) {
      // console.log('middleware excecute : ',request.url)
          //belum login
  if (!login){ 
    return NextResponse.redirect(new URL('/', request.url))
  }
      request.cookies.set('name','vika rahmanova nurulianov')
      console.log('berhasil membuat cookies',request.cookies.get('name'))
  
  // NextResponse.next()'
 
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/products/:path*'
  ],
}