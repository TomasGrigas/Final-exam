import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`;

export const Form = ({...props}) => {
    return <FormStyled {...props} />
}