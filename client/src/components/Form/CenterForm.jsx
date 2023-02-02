import styled from 'styled-components';


const FormCenterStyled = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`;

export const FormCenter = ({...props}) => {
    return <FormCenterStyled {...props} />
}