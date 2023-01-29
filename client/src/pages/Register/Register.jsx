import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { FormCenter } from "../../components/Form/CenterForm";
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

    const handleRegister = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/register`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ name, surname, email, password })
        })
        .then((res)=> res.json())
        .then((data)=>{
            navigate('/login');

        });
    };

    return(
            <FormCenter>
                <Form onSubmit={handleRegister}>
                    <Input placeholder="Name"
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                    />
                    <Input placeholder="Surname"
                        onChange={(e)=> setSurname(e.target.value)}
                        value={surname}
                    />
                    <Input placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                    />
                    <Input placeholder="Password"
                        type="password"
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    /> 
                    <Button> Register </Button>
                    <LinkStyled to="/login">Login</LinkStyled>
                </Form>
            </FormCenter>
    )
}