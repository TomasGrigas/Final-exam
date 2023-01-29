
import styled from "styled-components"

const ButtonStyled = styled.button`
border: 1px solid grey;
border-radius: 10px;
padding: 10px 20px;

`;

export const Button = (props) =>{
    return <ButtonStyled {...props} />
}