import prisma from "@/lib/prisma";
import Link from "next/link";

const Page = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      id: true,
      body: true,
    },
  });

  console.log(post);

  return (
    <>
      <h1>Post</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
};

export default Page;
