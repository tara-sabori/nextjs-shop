import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);

    if (!user) {
      return NextResponse.redirect(new URL("/auth", url));
    }

    if (!user?.isActive)
      return NextResponse.redirect(new URL("/auth/complete-profile", url));

    if (user.role !== "USER") {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);

    if (!user) {
      return NextResponse.redirect(new URL("/auth", url));
    }

    if (user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  if (pathname.startsWith("/auth")) {
    const user = await middlewareAuth(req);
    if (user && user.isActive) {
      return NextResponse.redirect(new URL("/profile", url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/auth/:path*"],
};
