import { useState } from "react";
import { useEffect } from "react"
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { LOGGED_IN_USER } from "../../constants/constants";
import { Form } from "../../components/Form/Form";



export const Attendees = () => {
    const [attendees, setAttendees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/attendees?userId=${LOGGED_IN_USER.id}`)
        .then (res => res.json())
        .then(data => {
            setAttendees(data);
            setIsLoading(false);
        });
    },[])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleAttendeesAdd = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/attendees`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                surname,
                email,
                phone_number,
                userId: 1
            })
        })
        .then((res)=> res.json())
        .then((data) => {
            setAttendees(data);
            setName('');
            setSurname('');
            setEmail('');
            setPhoneNumber('');

        })
    }

    return (
        <ul>
            <Form on onSubmit={handleAttendeesAdd}>
                <Input 
                    placeholder= "name" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                    value ={name}
                    />
                <Input
                    placeholder= "surname"  
                    required
                    onChange={(e) => setSurname(e.target.value)}
                    value ={surname}
                     />
                <Input
                    placeholder= "email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value ={email}
                     />
                <Input
                    placeholder= "phone number"    
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value ={phone_number}
                    />
                <Button>Add</Button>

            </Form>
           
            {attendees.map((attend) => (
                <li key={attend.id}>
                   <span>Name {attend.name} </span>
                   <span>Surname {attend.surname} </span>
                   <span>Email {attend.email} </span>
                   <span>Phone number {attend.phone_number} </span>
                </li>
            ))}
        </ul>
    );
}