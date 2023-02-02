import styled from 'styled-components';
import LoginImage from '../../images/LoginImage.jpeg'

const FormCenterStyled = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-image:url(${LoginImage});
    background-size: cover;
`;

export const FormCenter = ({...props}) => {
    return <FormCenterStyled {...props} />
}