import PostCard from "@/components/molecules/PostCard";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/sessionToken";

const Page = async ({ params }) => {
  const username = params.slug;

  const { id: userId } = await getSession();

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const posts = await prisma.post.findMany({
    where: {
      authorId: user.id,
    },
    include: {
      author: true,
    },
  });

  console.log(posts);

  return (
    <>
      {/* <div className="flex items-center gap-2 px-3 py-2 bg-white border-b border-slate-200">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 text-slate-700"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p className="text-slate-700 font-semibold">{user.username}</p>
      </div> */}
      <div className=" flex items-center gap-2 p-4 bg-white">
        <figure className="w-20 h-20 rounded-full border-2 border-slate-300 overflow-hidden ">
          <img
            width={100}
            height={100}
            src={`https://robohash.org/avatar${user.id}.png`}
            alt="Avatar"
          />
        </figure>
        <div>
          <h2 className="text-slate-700 text-2xl font-semibold">{user.name}</h2>
          <p className="text-slate-500 text-sm">{user.email}</p>
        </div>
      </div>
      <div className="flex gap-2 bg-white px-3 pb-4 mb-2">
        <button className="w-full text-slate-700 rounded-lg bg-slate-200 px-3 py-1 ">
          {user.id === userId ? "Edit Profile" : "Message"}
        </button>
        <button className="w-full text-slate-700 rounded-lg bg-slate-200 px-3 py-1 ">
          Share Profile
        </button>
      </div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </>
  );
};

export default Page;
