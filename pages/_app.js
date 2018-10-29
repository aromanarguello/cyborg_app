import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import Pages from '../components/layout/Pages';
import withData from '../grapqhl/withData';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #6190e8;
    background: -webkit-linear-gradient(to right, #6190e8, #a7bfe8);
    background: linear-gradient(to right, #6190e8, #a7bfe8);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }`;


class MyApp extends App {
    static async getInitialProps({ Component: { getInitialProps }, ctx }) {
        let pageProps = {};
        if (getInitialProps) {
            pageProps = await getInitialProps(ctx);
        }
        // exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Pages>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </Pages>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(MyApp);
