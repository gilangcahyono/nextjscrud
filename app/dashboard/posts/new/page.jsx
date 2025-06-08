import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <h1>Create new post</h1>
      <form>
        <div>
          <input type="text" name="title" placeholder="Title" required />
        </div>
        <br />
        <div>
          <textarea
            name="body"
            placeholder="Body"
            required
            rows={5}
            cols={50}
          />
        </div>
        <br />
        <div>
          <button type="submit">Create</button>{" "}
          <button type="button">
            <Link href="/dashboard/posts">Cancel</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
