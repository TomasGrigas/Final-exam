import styled from 'styled-components';

const ErrorStyled = styled.div`
   color: red;
   text-align: center;
`;

export const ErrorS = ({...props}) => {
    return <ErrorStyled {...props} />
}