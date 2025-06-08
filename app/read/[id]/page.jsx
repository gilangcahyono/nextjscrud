import prisma from "@/lib/prisma";
import Link from "next/link";

const Page = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      id: true,
      title: true,
      body: true,
    },
  });

  return (
    <>
      <h1>Post</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
