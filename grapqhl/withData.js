import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { LOCAL_STATE_QUERY } from '../components/layout/Pages';

function createClient({ headers }) {
    return new ApolloClient({
        uri: 'http://localhost:4000',
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            });
        },
        // local data
        clientState: {
            resolvers: {
                Mutation: {
                    toggleIsLoggedIn(_, variables, { cache }) {
                        const { isLoggedIn } = cache.readQuery({
                            query: LOCAL_STATE_QUERY,
                        });
                        const data = { data: { isLoggedIn: !isLoggedIn } };
                        cache.writeData(data);
                        return data;
                    },
                },
            },
            defaults: {
                isLoggedIn: false,
            },
        },
    });
}

export default withApollo(createClient);