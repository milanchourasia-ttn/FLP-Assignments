import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuth = request.cookies.get("auth")?.value === "true";

  // Protected routes
  const protectedRoutes = ["/assigment_7/dashboard", "/assigment_7/profile"];

  // If not authenticated and trying to access protected route, redirect to login
  if (!isAuth && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/assigment_7/login", request.url));
  }

  // If authenticated and trying to access login, redirect to dashboard
  if (isAuth && pathname.startsWith("/assigment_7/login")) {
    return NextResponse.redirect(
      new URL("/assigment_7/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/assigment_7/:path*"],
};
