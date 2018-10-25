import styled from 'styled-components';


const CardContainer = styled.div`
    max-width: 400px;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:  1px 2px 2px #607D8B;
    flex-direction: column;
`;

const SigninWrapper = styled.div`
    grid-row: 2;
    img {
        width: 200px;
        height: 130px;
        align-self: flex-start;
        margin: 0 auto;
    }
    div {
        margin: 0 auto;
        border-radius: 5px;
        background-color: #fff;
    }
`;

const InnerCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    .signInInput {
        margin: 10px;
    }
    .loginIcons {
        margin-right: 10px
    }
`;

const SubmitRow = styled.div`
    width: inherit;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    padding-right: 10px;
    padding-bottom: 40px;
`;

export { CardContainer, InnerCardContainer, SubmitRow, SigninWrapper };