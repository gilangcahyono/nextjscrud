"use server";

import { cookies } from "next/headers";

export const logout = async () => {
  cookies().set("token", "", { expires: new Date(0) });
};
