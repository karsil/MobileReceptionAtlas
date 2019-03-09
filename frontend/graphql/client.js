import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
    uri: 'http://192.168.178.38:5000/graphql', // for development change to local computers ip
    cache: new InMemoryCache(),
});
