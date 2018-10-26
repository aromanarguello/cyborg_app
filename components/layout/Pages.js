import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from '../header/Header'

const BackgroundWrapper = styled.div`
    display:  grid;
    grid-template-rows: 0.7fr 2fr 0.5fr;
`;

class Pages extends Component {
    render() {
      return (
          <BackgroundWrapper>
              <SideBar />
              {this.props.children}
          </BackgroundWrapper>
      )
    }
};

export default Pages;