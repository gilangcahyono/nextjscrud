import { NextResponse } from "next/server";

const publicRoutes = ["/login", "/register"];

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/read")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  if (!token) {
    const url = `/login?redirect=${request.nextUrl.pathname}`;
    return NextResponse.redirect(new URL(url, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
