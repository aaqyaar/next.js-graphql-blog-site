import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      author
      excerpt
      content
      avatar
      category
      createdAt
      slug
      tags
      updatedAt
    }
  }
`;

export const GET_POST = gql`
  query getPost($slug: String!) {
    post(slug: $slug) {
      id
      title
      author
      excerpt
      content
      avatar
      category
      createdAt
      slug
      tags
      updatedAt
    }
  }
`;