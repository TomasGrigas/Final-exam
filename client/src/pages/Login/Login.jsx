import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { FormCenter } from "../../components/Form/CenterForm";
import { FieldSet } from "../../components/FieldSet/FieldSet";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    align-self: center;
`;

export const Login = ({onSuccess}) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
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
            if (res.status === 200){
                return res.json();
            }

            throw Error ('Incorrect username or password');
        })
        .then((data) => {
            onSuccess(data);
            setIsLoading(false);
        })

        .catch((e)=>{
            setError(String(e));
            setIsLoading(false);

        })
     }

    return (
        <FormCenter>
            <Form onSubmit={handleLogin}>
                <FieldSet disabled={isLoading}>
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
                </FieldSet>
                <Button disable={isLoading}>Login</Button>
                <LinkStyled to="/register">Register</LinkStyled>  
            </Form>             
        </FormCenter>
    )
}