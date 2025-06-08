import { usePathname, useSearchParams } from "next/navigation";

export const getRedirectUrl = () => {
  const pathname = usePathname();
  const queryParams = useSearchParams() || "";
  const redirectUrl =
    queryParams === "" ? `${pathname}?${queryParams || ""}` : `${pathname}`;
  return redirectUrl;
};
