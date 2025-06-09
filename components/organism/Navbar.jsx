import { getSession } from "@/lib/sessionToken";
import Link from "next/link";
import Home from "../icons/Home";
import Plus from "../icons/Plus";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="flex items-center justify-between px-4 pt-3 pb-4 border-t border-slate-200 bg-white fixed bottom-0 w-full sm:w-sm z-[2]">
      <Link href="/">
        <Home />
      </Link>
      <Link href="/posts/new">
        <Plus />
      </Link>
      <Link href={`/${session.username}`}>
        <figure className="w-7 h-7 rounded-full border-2 border-slate-300 overflow-hidden cursor-pointer">
          <img
            width={100}
            height={100}
            src={`https://robohash.org/avatar${session.id}.jpeg`}
            alt="Avatar"
          />
        </figure>
      </Link>
    </nav>
  );
};

export default Navbar;

{
  /* <details className="flex items-center relative z-[1]">
  <summary className="list-none"></summary>
  <div className="absolute w-40 top-10 right-0 bg-white shadow-lg rounded-xl py-3 px-4">
    <ul>
      <li className="mb-2">
        <Link
          className="inline-block px-2 py-1 rounded-lg text-slate-700 w-full hover:bg-slate-100"
          href="/profile"
        >
          Profile
        </Link>
      </li>
      <hr className=" border-t border-slate-400 mb-2" />
      <li>
        <LogoutButton />
      </li>
    </ul>
  </div>
</details>; */
}
