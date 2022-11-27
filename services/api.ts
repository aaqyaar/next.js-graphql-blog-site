import client from "constants/apollo-client";
import { GET_POST, GET_POSTS } from "graphql/postQueries";

export const getPosts = async () => {
  const { data, loading, error } = await client.query({
    query: GET_POSTS,
  });
  return { data: data.posts, loading, error };
};

export const getPost = async (slug: string) => {
  const { data, loading, error } = await client.query({
    query: GET_POST,
    variables: { slug },
  });
  return { data: data, loading, error };
};
