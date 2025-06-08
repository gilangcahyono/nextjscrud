"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {children}
    </button>
  );
}
