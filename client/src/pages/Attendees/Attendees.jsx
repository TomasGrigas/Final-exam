import { useState } from "react";
import { useEffect } from "react"

export const Attendees = () => {
    const [attendees, setAttendees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:8000/attendees?userId=1')
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
        <div>
            {attendees.map((attend) => <div key={attend.id}>{attend.name}</div>)}
        </div>
    );
}