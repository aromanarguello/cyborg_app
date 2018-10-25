import React, { Component } from 'react';
import Signin  from '../components/signin/Signin'
import styled from 'styled-components';
import { SigninWrapper } from '../components/styles/Credentials.styles';

class Auth extends Component {

    state = {
        firstName: String(),
        lastName: String(),
        middleName: String(),
        email: String(),
        id: String(),
        emailInput: String(),
        passwordInput: String(),
    }

    setUserInfo = (firstName, lastName, middleName, email, id, token) => {
        sessionStorage.setItem('Authorization', token )
        this.setState({
            firstName,
            lastName,
            middleName,
            email,
            id
        })
    }

    inputOnChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }


    render() {
        const { emailInput, passwordInput } = this.state;
        return (
            <SigninWrapper>
                    <Signin
                        setUserInfo={this.setUserInfo}
                        inputOnChange={this.inputOnChange}
                        emailInput={emailInput}
                        passwordInput={passwordInput}
                    />
            </SigninWrapper>
        );
    }
}

export default Auth