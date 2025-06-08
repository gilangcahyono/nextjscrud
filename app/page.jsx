import { logout } from "@/actions/logout";
import prisma from "@/lib/prisma";
import { decrypt, getSession } from "@/utils/functions";
import { cookies } from "next/headers";
import Link from "next/link";

const Home = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  const session = await getSession();
  console.log(session);

  return (
    <>
      <ul>
        <li>
          Current user :{" "}
          {session ? (
            <Link href={`/profile`}>{session.name}</Link>
          ) : (
            "You are not logged in"
          )}
        </li>
        <li>
          {session ? (
            <form action={logout}>
              <button type="submit">Logout</button>
            </form>
          ) : (
            <Link href={`/login`}>Login</Link>
          )}
        </li>
      </ul>

      <h1>MySosmed</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/read/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

// <table border={1} cellPadding={7} cellSpacing={0}>
//   <thead>
//     <tr>
//       <th>No</th>
//       <th>Title</th>
//       <th>Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     {posts.map((post, idx) => (
//       <tr key={idx}>
//         <td>{idx + 1}</td>
//         <td>{post.title}</td>
//         <td>
//           <button>
//             <Link href={`/read/${post.id}`}>View</Link>
//           </button>{" "}
//           <button>Edit</button> <button>Delete</button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
