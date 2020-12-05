import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app';
import { Auth0Provider } from '@auth0/auth0-react';
// import './scss/index';

const domain = "taskycalendar.us.auth0.com";
const clientId = "YgX1vMoyV7yvnXj8gO6XSTUAW6CT9Hzr";


ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
        <App/>
    </Auth0Provider>, 
    document.getElementById('root')
);