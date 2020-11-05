import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPanel from './components/LoginPanel';
import UserList from './components/UsersList';
import Dealerships from './components/Dealerships';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';


function App() {

    // let location = useLocation();

    return (
        <BrowserRouter>
            {/* <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/">
                    <h1>My Home Page</h1>
                </Route>
            </Switch> */}
            {/* {location.pathname !== '/login' && location.pathname !== '/signup' ?
                <Navigation />
                : null} */}
            <Navigation />
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/login" component={LoginPanel}></Route>
                <Route path="/signup" component={SignUp}></Route>
                {/* <Route path="/" component={Dealerships}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
