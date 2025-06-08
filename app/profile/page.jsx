import { getSession } from "@/lib/sessionToken";

const Page = async () => {
  const { name, email } = await getSession();
  const user = {
    name,
    email,
  };

  return (
    <>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Page;
