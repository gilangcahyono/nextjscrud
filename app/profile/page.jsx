import prisma from "@/lib/prisma";
import { getSession } from "@/utils/functions";
import Link from "next/link";

const Page = async () => {
  const session = await getSession();

  return (
    <>
      <h1>Profile</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
