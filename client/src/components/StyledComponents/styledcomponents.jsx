import styled from "styled-components";
import LoginImage from '../../images/LoginImage.jpeg';
import RegisterImage from '../../images/RegisterImage.jpeg';
import ColdplayImage from '../../images/ColdplayImage.jpeg';
import { FormCenter } from "../Form/CenterForm";
import { Link } from "react-router-dom";

export const LoginFormImage = styled(FormCenter)`
    background-image:url(${LoginImage});
    background-size: cover;
`;
export const RegisterFormImage = styled(FormCenter)`
    background-image:url(${RegisterImage});
    background-size: cover;
`;
export const ImageStyled = styled.div`
    align-self: center;
    width:225px;
    height:225px;
    background-image:url(${ColdplayImage});
`;
export const CenterImageStyled = styled.div`
    display: flex;
    justify-content: center;
`;
export const LinkStyled = styled.div`
    align-self: center;
    color: black;
    text-decoration: none;
`;
export const LinkColorStyled = styled(Link)`
    color: orange;
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
    background-color: black;
    border-width: 1px;
    border-color: red yellow orange blue;
    border-style: solid;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    &:hover {
        background-color: darkred;
        transition: 0.2s;
        }
`;
export const RegisterLinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
    color: white;
    margin: 10px;
    text-decoration: none;
    background-color: black;
    border-width: 1px;
    border-color: red yellow orange blue;
    border-style: solid;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    &:hover {
        background-color: darkred;
        transition: 0.2s;
        }
`;
export const AttendeesBgStyled = styled.div`
    background-color:black;
    height: 200vh;
`;
export const TourStyled = styled.h1`
    display: flex;
    justify-content: center;
    color:white;
`;
export const OutletStyled = styled.div`
    diplay: flex;
    margin: 0px 300px;
    color: white;
`;
export const AttendeesListStyled = styled.li`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    border-width: 1px;
    border-color: red yellow orange blue;
    border-style: solid;
    border-radius: 10px;
    padding: 10px 20px;
    color: white;
    margin: 5px;
    align-items: center;
`;

 
