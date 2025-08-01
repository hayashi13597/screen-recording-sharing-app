import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session && !request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (session && request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|/sign-in|icons|images|samples).*)",
  ],
};
