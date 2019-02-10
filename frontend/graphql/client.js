import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: 'http://192.168.178.29:5000/graphql', // for development change to local computers ip
});
