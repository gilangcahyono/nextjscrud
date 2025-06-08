import { getTimeAgo } from "@/utils/getTimeAgo";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-sm mb-3">
      <div className="flex items-center gap-2 px-3 py-2 shadow-2xs">
        <figure className="w-10 h-10 rounded-full border border-slate-300 overflow-hidden ">
          <Link href={`/profile/${post.author.id}`}>
            <img
              width={100}
              height={100}
              src={`https://robohash.org/avatar${post.author.id}.png`}
              alt="Avatar"
            />
          </Link>
        </figure>
        <div>
          <Link
            href={`/${post.author.username}`}
            className="text-slate-700 font-semibold "
          >
            {post.author.name}
          </Link>
          <p className="text-slate-500 text-sm">
            {getTimeAgo(post.createdAt)} ago
          </p>
        </div>
      </div>

      <p className="text-slate-700 px-3 pt-2 line-clamp-2">{post.body}</p>
      <div className="pb-2"></div>
    </div>
  );
};

export default PostCard;
