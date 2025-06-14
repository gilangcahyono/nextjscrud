import prisma from "@/lib/prisma";
import Link from "next/link";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>;
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
