import client from "constants/apollo-client";
import { GET_POSTS } from "graphql/postQueries";

export default async function Home() {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return (
    <div className="px-5 py-2">
      <h1 className="">Welcome to Next.js! + GraphQL</h1>
      <p className="">
        Get started by editing <code>pages/index.tsx</code>
      </p>
    </div>
  );
}
