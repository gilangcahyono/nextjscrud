"use client";

import Link from "next/link";
import { login } from "@/actions/auth";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

const Page = () => {
  const [state, formAction] = useFormState(login, { message: "" });
  const params = useSearchParams();
  const redirectUrl = params.get("redirect") || "/";

  return (
    <>
      <h1>Login</h1>
      <form action={formAction}>
        <input type="hidden" name="redirectUrl" value={redirectUrl} />
        <div>
          <small>{state?.message}</small>
        </div>

        <br />

        <div>
          <input type="email" name="email" placeholder="Email" required />
        </div>

        <br />

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={3}
            required
          />
        </div>

        <br />

        <div>
          <SubmitButton>Login</SubmitButton>
        </div>
        <div>
          <p>
            Don&apos;t have an account? <Link href="/register">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Page;
