import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
    display:  grid;
    grid-template-rows: .4fr 1.5fr 0.2fr;
`;

class Pages extends Component {
    render(){
      return (
          <BackgroundWrapper>
              {this.props.children}
          </BackgroundWrapper>
      )
    }
};

export default Pages;