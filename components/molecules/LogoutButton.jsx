"use client";

import { logout } from "@/actions/auth";
import { useFormStatus } from "react-dom";

const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <form action={logout}>
      <button
        className="flex items-center gap-1 w-full rounded-lg p-1 text-red-600 hover:bg-red-100 px-2"
        disabled={pending}
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        <span>{pending ? "Logging out..." : "Logout"}</span>
      </button>
    </form>
  );
};

export default LogoutButton;
