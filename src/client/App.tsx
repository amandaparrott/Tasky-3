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
import PrivateRoute from "./components/Auth0/private-route";



const App: React.FC<IAppProps> = () => {

  return (
    <Router>
      <nav className="navbar sticky-top navbar">
					<button className="btn btn-outline-light" type="button">Home</button>
          <h1 className="text-light">TASKY</h1>
          {/* <<img src="" alt="tasky logo" class="d-flex justify-content-center mx-auto" id="icon"></img>> */}
					<button className="btn btn-outline-light" type="button">Menu</button>
			</nav>
      <Switch>
         <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/logout" component={LogOutPage} />
        <Route path="/createaccount" component={CreateAccount} />
        <PrivateRoute path="/calendar" component={Calendar} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
       <PrivateRoute exact path="/:id/edit" component={EditReminders} />
       

      </Switch>
    </Router>
  )
};

interface IAppProps { }

export default App;
