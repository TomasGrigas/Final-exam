import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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
            <>
                <form onSubmit={handleRegister}>
                    <input placeholder="Name"
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                    />
                    <input placeholder="Surname"
                        onChange={(e)=> setSurname(e.target.value)}
                        value={surname}
                    />
                    <input placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                    />
                    <input placeholder="Password"
                        type="password"
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    /> 
                    <button> Register </button>
                </form>
                <Link to="/login">Login</Link> 
            </>
    )
}