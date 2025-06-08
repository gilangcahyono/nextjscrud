import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/register"];

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();

    // if (!token) return NextResponse.next();

    // return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token) {
    const url = `/login?redirect=${request.nextUrl.pathname}`;
    return NextResponse.redirect(new URL(url, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
