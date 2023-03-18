import { useContext, useState } from "react";
import { useEffect } from "react"
import { Button, DeleteButttonStyled} from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import { UserContext } from "../../contexts/UserContextWrapper";
import { LOCAL_STORAGE_JWT_TOKEN_KEY } from "../../constants/constants";
import { AttendeesListStyled } from "../../components/StyledComponents/styledcomponents";
import { DateTime } from 'luxon';

export const Attendees = () => {
    const [attendees, setAttendees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const { user } = useContext(UserContext);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/attendees?userId=${user.id}`, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN_KEY)
            }
        })
        .then (res => res.json())
        .then(data => {
            if(!data.error){
                setAttendees(data);
            }
            setIsLoading(false);
        });
    },[user.id])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleAttendeesAdd = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/attendees`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                 authorization: 'Bearer ' + localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN_KEY)
            },
            body: JSON.stringify({
                name,
                surname,
                email,
                phone_number,
                userId: user.id
            })
        })
        .then((res)=> res.json())
        .then((data) => {
            if(!data.error){
                setAttendees(data);
                setName('');
                setSurname('');
                setEmail('');
                setPhoneNumber('');
            }
        })
    }

    const handleDeleteAttendees =(id) => {
        if(window.confirm('Do you really want to DELETE this attendee?')=== true){
            fetch(`${process.env.REACT_APP_API_URL}/attendees/${id}`,{
                method: 'DELETE',
                headers:{
                    authorization: 'Bearer ' + localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN_KEY)
                }
            })
            .then(res => res.json())
            .then(data => {
                setAttendees(data);
            });
        }
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
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value ={email}
                     />
                <Input
                    placeholder= "phone number"  
                    type="number"  
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value ={phone_number}
                    />
                <Button>Add</Button>

            </Form>
           
            {attendees.map((attend) => (
                <AttendeesListStyled key={attend.id} >
                    <div>
                        <div>Name: {attend.name} </div>
                        <div>Surname: {attend.surname} </div>
                        <div>Email: {attend.email} </div>
                        <div>Phone number: {attend.phone_number} </div>
                        <div>Registration date: ({DateTime.fromISO(attend.timestamp).toFormat('yyyy-LL-dd HH:mm')}) </div>
                    </div>
                    <div>
                        <DeleteButttonStyled onClick={() => handleDeleteAttendees(attend.id)}>Delete</DeleteButttonStyled>
                    </div>
                </AttendeesListStyled>
            ))}
        </ul>
    );
}