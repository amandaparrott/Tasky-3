//for commit only
import React from 'react';
import RemindersCell from '../components/Dashboard/Reminders/RemindersCell';
import Schedule from './Dashboard/Events/Schedule'
import Messages from '../components/Dashboard/Messages'
import CreateEvent from './Dashboard/Events/CreateEvent'
import TaskList from '../components/Dashboard/TaskList'
import LoginButton from '../components/Auth0/LoginButton';
import LogoutButton from '../components/Auth0/LogoutButton';
import Profile from '../components/Auth0/Profile';

const Dashboard: React.FC<IDashboardProps> = () => {
    return (
        <div className="dashboard-container">
            {/* <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <LoginButton /><LogoutButton />
                </div>
            </div> */}
            <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <Profile />
                </div>
            </div>
            <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                <CreateEvent />
        
                <Messages />
                </div>

                <div className="col-8">
                <TaskList />
             
                <RemindersCell />
                </div>
                

                <div className="row">
                    <div>
                         <Schedule />
                    </div>
                   
                </div>


            </div>
        </div>
    )
}

interface IDashboardProps { }

export default Dashboard;