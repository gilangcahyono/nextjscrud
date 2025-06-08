"use client";

import { register } from "@/actions/register";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(register, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <h1>Register</h1>
      <form action={formAction}>
        <div>
          <small>{state?.message}</small>
        </div>

        <br />

        <div>
          <input type="text" name="name" placeholder="Name" required />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            minLength={3}
            required
          />
        </div>

        <br />

        <div>
          <button disabled={pending} type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
