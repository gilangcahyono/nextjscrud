"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { encrypt } from "@/lib/sessionToken";
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
    username: user.username,
    email: user.email,
  };

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const token = await encrypt(payload, expires);

  cookies().set("token", token, { expires, httpOnly: true });

  const redirectUrl = formData.get("redirectUrl") || "/";

  revalidatePath("/users");
  return redirect(redirectUrl);
};

export const register = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    return { message: "Passwords do not match" };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: { name, email, password: passwordHash },
  });

  revalidatePath("/users");
  return redirect("/login");
};

export const logout = async () => {
  cookies().set("token", "", { expires: new Date(0) });
  return redirect("/");
};
