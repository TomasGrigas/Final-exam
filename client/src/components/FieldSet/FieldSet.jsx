import styled from 'styled-components';

const FieldSetStyled = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    border: 0;
    padding: 0;
    margin:0;
`;

export const FieldSet = ({...props}) => {
    return <FieldSetStyled {...props} />
}