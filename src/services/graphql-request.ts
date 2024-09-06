import { ApolloClient, InMemoryCache } from '@apollo/client';

const URI = import.meta.env.VITE_ENV === "production" ? 
  import.meta.env.VITE_API_URL : 
  import.meta.env.VITE_API_URL_DEVELOPMENT;
const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

export default client;