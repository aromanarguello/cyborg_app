import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SideBar from '../header/Header';

const LOCAL_STATE_QUERY = gql`
    query {
        isLoggedIn @client
    }
`;

const BackgroundWrapper = styled.div`
    display:  grid;
    grid-template-rows: 0.7fr 2fr 0.5fr;
`;

const Pages = ({ children }) => (
    <BackgroundWrapper>
        <Query query={LOCAL_STATE_QUERY}>
            {({ data: { isLoggedIn } }) => (
                isLoggedIn ? <SideBar /> : <div />
            )}
        </Query>
        {children}
    </BackgroundWrapper>
);

export default Pages;
export { LOCAL_STATE_QUERY };
