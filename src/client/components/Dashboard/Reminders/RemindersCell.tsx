import React from 'react';
import { useState, useEffect } from 'react';
import ReminderTimeline from './ReminderTimeline';
import { useHistory, RouteComponentProps } from 'react-router-dom';

const RemindersCell: React.FC<IAddRemindersProps> = () => {
const [content, setContent] = useState<string>("");

const handleClick = (e) => {
    e.preventDefault();
    newReminder();
}

const history = useHistory();

const newReminder = async () => {
    const reminder = {
        content: content
    };
    let res = await fetch ("api/reminders", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reminder)
    })
    history.push('/');
    if(res.ok) {
        console.log('reminder posted');
       
    } else {
        console.log('reminder not posted');
    }
}

    return (
        <>
        <div className="card box shadow mt-2">
            <div className="generic-div mt-4">
                <div className="row justify-content-center">
                    <h1 className="header-text text-center">REMINDERS</h1>
                </div>
                <div className="row justify-content-center">
                    <input
                        className="reminderInput"
                        placeholder="New Reminder"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
                    <button 
                    type="button" 
                    className="btn btn-info" 
                    aria-label="Right Align"
                    onClick={e => handleClick(e)}>
                        Add
                    </button>
                </div>
            </div>
            <div className="li-div text-center">
                < ReminderTimeline />
            </div>
            </div>
        </>


        
    )

}

interface IAddRemindersProps extends RouteComponentProps {}

export default RemindersCell;