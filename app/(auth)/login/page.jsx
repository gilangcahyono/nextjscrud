import { login } from "@/actions/login";

const Page = () => {
  return (
    <form action={login}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Page;
