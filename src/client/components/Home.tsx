import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginButton from '../components/Auth0/LoginButton';
import LogoutButton from '../components/Auth0/LogoutButton';
import Profile from '../components/Auth0/Profile';


const TaskyHome: React.FC<ITaskyHomeProps> = () => {
    return (
        <>
      
        <div className="home-header-container">
        <div className="header-text-container mx-5">
            <h4 className="row h4-text">Welcome to Tasky</h4>
            <h1 className="row h1-text">Your schedule, Your way.</h1>
            <p className="row para-text">Tasky is a modern task and calendar app for kids and parents. Use Tasky to set mandatory tasks, manage appointments, and keep up with school assignments.</p>
        </div>
        <div>
            <img className="header-img mx-2 my-5" src="./assets/header-img.png" alt="Header-IMG"/>
        </div>
        </div>
            <div className="home-page-card-container">
            <div className="generic-div">
                <div className="row justify-content-center">
                <img src="./assets/communication.png" className="card-img-top" alt="message icon"/>
                </div>
                <div className="row justify-content-center">
                    <h1 className="card-title">Communication</h1>
                    <p className="card-text">Message each other about events, chores, appointments, and school all in one place.</p>
                </div>
            </div>
            <div className="generic-div">
                <div className="row justify-content-center">
                <img src="./assets/priority.png" className="card-img-top" alt="priority icon"/>
                </div>
                <div className="row justify-content-center">
                    <h1 className="card-title">Prioritization</h1>
                    <p className="card-text">Set priority on your childs tasks while keeping up with your own responsibilities.</p>
                </div>
            </div>
            <div className="generic-div">
                <div className="row justify-content-center">
                <img src="./assets/schedule.png" className="card-img-top" alt="calendar icon"/>
                </div>
                <div className="row justify-content-center">
                    <h1 className="card-title">Scheduling</h1>
                    <p className="card-text">Stay up to date on all of your childrens appointments and important events.</p>
                </div>
            </div>
            </div>
            <div className="home-pg-middle-text-container">
                <h3 className="bringing-balance-text">Bringing balance to our new work and learn from home lives.</h3>
                <h4 className="free-text">And the best part is... it’s completely free... <a href="/signup"></a>sign up now!</h4>
            </div>
            <div className="home-pg-footer-image-container">
                <img className="footer-img" src="./assets/chaos-img.png" alt="chaos-IMG"/>
                <img className="footer-arrow-img" src="./assets/arrow.png" alt="Header-IMG"/>
                <img className="footer-img" src="./assets/dashboard-img.png" alt="dashboard-IMG"/>
            </div>
            <div className="footer">
                <p className="footer-text">©TASKYCALENDARAPP.COM</p>
            </div>

            {/* login button stuff */}

            <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <LoginButton /><LogoutButton />
                </div>
            </div>
            <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <Profile />
                </div>
            </div>
        </>
    )
}
interface ITaskyHomeProps extends RouteComponentProps {}
export default TaskyHome;