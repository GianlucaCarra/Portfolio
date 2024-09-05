import { ApolloClient, InMemoryCache } from '@apollo/client';

const URI = import.meta.env.VITE_API_URL;
const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

export default client;