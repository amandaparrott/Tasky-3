import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import EditReminder from './EditReminders';

const ReminderCard: React.FC<IReminderCardProps> = (props) => {



    return (
        <div className="row">
            <li className="list-group-item justify-content-center">{props.reminder.content}</li>
            <Link to={`/${props.reminder.id}/edit`} >
                <button
                    type="button"
                    className="btn btn-default"
                    aria-label="Right Align"
                >Edit</button>
            </Link>
        </div>
    )
};

interface IReminderCardProps {
    reminder: {
        id: string,
        reminderid: string,
        content: string,
        relationid: number,
        childnum: number
    }
}

export default ReminderCard;