import prisma from "@/lib/prisma";
import { getSession } from "@/lib/sessionToken";

const Page = async () => {
  const user = await getSession();

  const posts = await prisma.post.count({
    where: {
      authorId: user.id,
    },
  });

  return (
    <>
      <h1>Welcome back 🖐 {user.name}</h1>
      <p>You have {posts} posts</p>
    </>
  );
};

export default Page;
