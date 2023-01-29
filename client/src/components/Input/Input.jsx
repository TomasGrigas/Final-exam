import styled from 'styled-components';

const InputStyled = styled.input`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px 20px;

    &:disabled {
        opacity: 0,5px

`;

export const Input = ({...props}) => {
    return <InputStyled {...props} />
}