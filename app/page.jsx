import PostCard from "@/components/molecules/PostCard";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/sessionToken";
import Header from "@/components/molecules/Header";
import Navbar from "@/components/organism/Navbar";

const Home = async () => {
  const { id: userId } = await getSession();

  const posts = await prisma.post.findMany({
    where: {
      NOT: {
        authorId: userId,
      },
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Header />
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </>
  );
};

export default Home;
