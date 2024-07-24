import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
      // console.log('middleware excecute : ',request.url)
  return NextResponse.redirect(new URL('/', request.url))
  // NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/products/:path*'
  ],
}