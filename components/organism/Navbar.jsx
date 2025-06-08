import { getSession } from "@/lib/sessionToken";
import Link from "next/link";
import LogoutButton from "../molecules/LogoutButton";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-2xs fixed w-full max-w-sm z-[2]">
      <h1 className="text-3xl font-bold text-sky-600">
        <Link href="/">MySosmed</Link>
      </h1>
      <details className="flex items-center relative z-[1]">
        <summary className="list-none">
          <figure className="w-10 h-10 rounded-full border border-slate-300 overflow-hidden cursor-pointer">
            <img
              width={100}
              height={100}
              src={`https://robohash.org/avatar${session.id}.jpeg`}
              alt="Avatar"
            />
          </figure>
        </summary>
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
      </details>
    </nav>
  );
};

export default Navbar;
