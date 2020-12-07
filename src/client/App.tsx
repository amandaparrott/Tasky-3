import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import RemindersCell from './components/Dashboard//Reminders/RemindersCell';
import EditReminder from './components/Dashboard/Reminders/EditReminders';
import Dashboard from './components/Dashboard';
import EditReminders from './components/Dashboard/Reminders/EditReminders';
import Home from './components/Home';
import LoginPage from './components/Auth0/LoginPage';
import CreateAccount from './components/Auth0/CreateAccount';
import Calendar from './components/Calendar/Calendar';
import LogOutPage from './components/Auth0/LogoutPage';
import Navbar from './components/Dashboard/Navbar';



const App: React.FC<IAppProps> = () => {

  return (
    <Router>
      <nav className="navbar sticky-top navbar">
          <img src="../assets/Tasky-logo-white.png" alt="tasky logo" className="d-flex justify-content-left mx-auto" id="main-logo"></img>
					<button className="btn btn-outline-light mx-2" type="button">Home</button>
					<button className="btn btn-outline-light mx-2" type="button">Menu</button>
			</nav>
      <Switch>
         <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogOutPage} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/calendar" component={Calendar} />
        <Route exact path="/dashboard" component={Dashboard} />
       <Route exact path="/:id/edit" component={EditReminders} />
       

      </Switch>
    </Router>
  )
};

interface IAppProps { }

export default App;
