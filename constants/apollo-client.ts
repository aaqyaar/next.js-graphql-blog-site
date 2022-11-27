import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
