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
      image {
        id
        url
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($slug: String!) {
    posts(where: { slug: $slug }) {
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
      image {
        id
        url
      }
    }
  }
`;
