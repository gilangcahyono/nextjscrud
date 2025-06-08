import Navbar from "@/components/organism/Navbar";
import PostCard from "@/components/molecules/PostCard";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/sessionToken";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Link from "next/link";

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
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="pt-16"></div>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default Home;
