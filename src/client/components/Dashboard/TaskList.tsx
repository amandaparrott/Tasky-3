
import React from 'react';
import { useState, useEffect } from 'react';

const TaskTimeline = () => {
    const [events, setEvent] = useState<ITasks[]>([]);
    useEffect(() => {
        const getEvents = async () => {
            let res = await fetch('/api/events');
            if (res.ok) {
                let reminders = await res.json();
                setEvent(events);
            }
        }
        getEvents();
    }, []);
    return (
    <div className="card text-center box shadow">
        <div className="card-body dispay-flex justify-content-center">
            <h1>Today's Tasks</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Basketball Practice</li>
                <li className="list-group-item">Science Class</li>
                <li className="list-group-item">Chores</li>
                <li className="list-group-item">Dentist Appt</li>
                {/* {events.map((events) => ())} */}
            </ul>
        </div>
    </div>
    )
}
interface ITasks {
    id: string,
    reminderid: string,
    content: string,
    relationid: number,
    childnum: number
}
export default TaskTimeline;