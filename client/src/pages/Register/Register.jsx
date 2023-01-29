import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { FormCenter } from "../../components/Form/CenterForm";
import { ErrorS } from "../../components/Error/Error";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    align-self: center;
    text-decoration: none;
    
`;

export const Register = () =>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/register`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ name, surname, email, password })
        })
        .then((res)=>{
            if (res.status === 400){
                throw new Error("User already exists");
            }
            if(!res.ok){
                throw new Error("Something went wrong");
            }
            return res.json();
        })
        .then((data)=>{
            navigate('/login');
            setIsLoading(false);
            setError("");
        })
        .catch((e)=>{
            setError(e.message);
            setIsLoading(false);
        })
    };

    return(
            <FormCenter>
                <Form onSubmit={handleRegister}>
                    {error && <ErrorS>{error}</ErrorS>}
                    <Input placeholder="Name"
                        required
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                        disabled={isLoading}
                    />
                    <Input placeholder="Surname"
                        required
                        onChange={(e)=> setSurname(e.target.value)}
                        value={surname}
                        disabled={isLoading}
                    />
                    <Input placeholder="Email"
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        disabled={isLoading}
                    />
                    <Input placeholder="Password"
                        required
                        type="password"
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                        disabled={isLoading}
                    /> 
                    <Button> Register </Button>
                    <LinkStyled to="/login">Login</LinkStyled>
                </Form>
            </FormCenter>
    )
}