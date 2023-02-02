
import styled from "styled-components"

const ButtonStyled = styled.button`
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    color: white;

    &:disabled {
        opacity: 0,5px
    }
`;

export const Button = (props) =>{
    return <ButtonStyled {...props} />
}