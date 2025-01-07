import { NextResponse } from "next/server";

export function middleware(request: Request): Response {
  return NextResponse.next();
}

export const config = {
  matcher: '/news',
}