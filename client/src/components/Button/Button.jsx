
import styled from "styled-components"

const ButtonStyled = styled.button`
    background-color: black;
    border-width: 1px;
    border-color: red yellow orange blue;
    border-style: solid;
    border-radius: 10px;
    padding: 10px 20px;
    color: white;
    margin: 5px;

    &:hover {
        background-color: darkred;
        transition: 0.2s;
        }
`;

export const DeleteButttonStyled = styled(ButtonStyled)`
    background-color: red;
`

export const Button = (props) =>{
    return <ButtonStyled {...props} />
}