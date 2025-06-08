import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = process.env.JWT_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export const encrypt = async (payload) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
};

export const decrypt = async (token) => {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ["HS256"],
  });

  return payload;
};

export const getSession = async () => {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  return await decrypt(token);
};

export const updateSession = async (request) => {
  const token = request.cookies.get("token")?.value;
  if (!token) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(token);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "token",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
};
