import styled from "styled-components";
import LoginImage from '../../images/LoginImage.jpeg';
import ColdplayImage from '../../images/ColdplayImage.jpeg';
import { FormCenter } from "../Form/CenterForm";
import { Link } from "react-router-dom";

export const FormImage = styled(FormCenter)`
        background-image:url(${LoginImage});
        background-size: cover;
`;
export const ImageStyled = styled.div`
        align-self: center;
        width:225px;
        height:225px;
        background-image:url(${ColdplayImage});
`;
export const LinkStyled = styled.div`
    align-self: center;
    color: black;
    text-decoration: none;

`;
export const LinkColorStyled = styled(Link)`
    color:white;
    text-decoration: none;
    margin: 3px;
`;   
export const Header = styled.div`
    padding: 20px 40px;
    background-color: black;
`;
export const LoginLinkStyled = styled(Link)`
    color: white;
    margin: 10px;
    text-decoration: none;
    `
export const RegisterLinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
    `



 
