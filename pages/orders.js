import React, { Component } from 'react';
import styled from 'styled-components';

const Layer = styled.div`
    width: 400px;
    height: 300px;
    border: 1px solid black;
`;

class orders extends Component {
    render() {
        return (
            <Layer>
                <p> orders </p>
            </Layer>
        );
    }
}

export default orders;