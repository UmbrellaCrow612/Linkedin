// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/'

  if (request.nextUrl.pathname === '/feed') return NextResponse.redirect(url)
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/feed/:path*'],
}
