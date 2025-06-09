import Link from "next/link";

const Header = async () => {
  return (
    <header className="bg-white px-3 py-2 shadow-2xs mb-2">
      <h1 className="text-3xl font-bold text-sky-600 text-center">
        <Link href="/">MySosmed</Link>
      </h1>
    </header>
  );
};

export default Header;
