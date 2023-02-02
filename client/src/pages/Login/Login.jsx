import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { FormCenter } from "../../components/Form/CenterForm";
import { FieldSet } from "../../components/FieldSet/FieldSet";
import { ErrorS } from "../../components/Error/Error"
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContextWrapper";
import { LOCAL_STORAGE_JWT_TOKEN_KEY } from "../../constants/constants";
import ColdplayImage from '../../images/ColdplayImage.jpeg'

const LinkStyled = styled.div`
    align-self: center;
    color: black;
    text-decoration: none;

`;
const LinkColorStyled = styled(Link)`
    color:white;
    text-decoration: none;
    margin: 3px;
`;   
const Header = styled.div`
    padding: 20px 40px;
    background-color: black;
`;
const LoginLinkStyled = styled(Link)`
    color: white;
    margin: 10px;
    text-decoration: none;
    `
const RegisterLinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
    `

 const ImageStyled = styled.div`
    align-self: center;
    width:225px;
    height:225px;
    background-image:url(${ColdplayImage});
 `   
 

export const Login = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e)  => {
        e.preventDefault();
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                email,
                password
            }) 
        })
        .then((res)=>{
            if (res.status === 401){
                throw new Error ('Incorrect username or password');
            }

            if(!res.ok){
                throw new Error ('Something went wrong');
            }

            return res.json();
            
        })
        .then((data) => {
            const {id, email, token } = data;
            localStorage.setItem(LOCAL_STORAGE_JWT_TOKEN_KEY, token);
            setUser({id, email});
            setIsLoading(false);
            setError('');
            navigate('/');
        })

        .catch((e)=>{
            setError(e.message);
            setIsLoading(false);
        })
     }

    return (
        <div>
            <Header>
                <LoginLinkStyled to="/">LOGIN</LoginLinkStyled>
                <RegisterLinkStyled  to="/Register">REGISTER</RegisterLinkStyled >
            </Header>
        <FormCenter>
            <Form onSubmit={handleLogin}>
                <ImageStyled>COLDPLAY</ImageStyled>
                <h1>WORLD TOUR 2023</h1>
                <FieldSet disabled={isLoading}>
                    {error && <ErrorS>{error}</ErrorS>}
                    <Input placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Input placeholder="Password"
                        type ="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FieldSet>
                <Button disable={isLoading}>Login</Button>
                <LinkStyled>Not yet Registered? Click here to<LinkColorStyled to="/register">REGISTER</LinkColorStyled></LinkStyled>   
            </Form>             
        </FormCenter>
        </div>
    )
}