import prisma from "@/lib/prisma";

const Page = async ({ params }) => {
  const username = params.slug;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default Page;
