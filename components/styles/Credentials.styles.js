import styled from 'styled-components';

const CardContainer = styled.div`
    max-width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:  1px 2px 2px #607D8B;
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
`;

export { CardContainer, InnerCardContainer, SubmitRow };