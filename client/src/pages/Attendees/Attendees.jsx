import { useState } from "react";
import { useEffect } from "react"
import { LOGGED_IN_USER } from "../../constants/constants";



export const Attendees = () => {
    const [attendees, setAttendees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <ul>
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