"use server";

import prisma from "@/lib/prisma";
import { encrypt } from "@/utils/functions";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return { message: "User not found" };

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) return { message: "Incorrect password" };

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const token = await encrypt(payload, expires);

  cookies().set("token", token, { expires, httpOnly: true });

  const redirectUrl = formData.get("redirectUrl") || "/";

  revalidatePath("/users");
  return redirect(redirectUrl);
};
