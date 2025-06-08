import Link from "next/link";
import LogoutButton from "../molecules/LogoutButton";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/dashboard/posts">Posts</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <hr />
    </aside>
  );
};

export default Sidebar;
