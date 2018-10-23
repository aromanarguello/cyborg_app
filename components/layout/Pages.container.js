import React, { Component } from 'react';
import Header from '../header/Header';

class Pages extends Component {
    render() {
        return (
            <div>
                <p>Yo</p>
                {this.props.children}
            </div>
        );
    }
}

export default Pages;