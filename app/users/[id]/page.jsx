import prisma from "@/lib/prisma";
import Link from "next/link";

const Page = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return (
    <>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
