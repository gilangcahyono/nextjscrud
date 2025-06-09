import prisma from "@/lib/prisma";
import { getSession } from "@/lib/sessionToken";
import Link from "next/link";

const Page = async () => {
  const session = await getSession();

  const posts = await prisma.post.findMany({
    where: {
      authorId: session.id,
    },
    select: {
      id: true,
      body: true,
    },
  });

  return (
    <>
      <h1>Posts</h1>
      <button>
        <Link href="/dashboard/posts/new">New Post</Link>
      </button>
      <br /> <br />
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>No</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{post.body}</td>
              <td>
                <button>
                  <Link href={`/dashboard/posts/${post.id}`}>View</Link>
                </button>{" "}
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;
