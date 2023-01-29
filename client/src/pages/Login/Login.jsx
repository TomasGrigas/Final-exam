import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { FormCenter } from "../../components/Form/CenterForm";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    align-self: center;
`;

export const Login = ({onSuccess}) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
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
            if (res.status === 200){
                return res.json();
            }

            throw Error ('Incorrect username or password');
        })
        .then((res) => res.json())
        .then((data) => {
            onSuccess(data);
        })

        .catch((e)=>{
            setError(String(e));

        })
     }

    return (
        <FormCenter>
            <Form onSubmit={handleLogin}>
                {error && <div>{error}</div>}
                <Input placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                 />
                <Input placeholder="Password"
                    type ="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button>Login</Button>
                <LinkStyled to="/register">Register</LinkStyled>  
            </Form>             
        </FormCenter>
    )
}