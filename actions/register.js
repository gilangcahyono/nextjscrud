"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const register = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const passwordHash = await bcrypt.hash(password, 12);

  if (password !== confirmPassword) {
    return { message: "Passwords do not match" };
  }

  await prisma.user.create({
    data: { name, email, password: passwordHash },
  });

  revalidatePath("/users");
  return redirect("/login");
};
