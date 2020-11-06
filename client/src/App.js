import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserForm from './components/LoginForm';
import UserList from './components/UsersList';
import Dealerships from './components/Dealerships';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import AuthContext from './auth'


function App() {

    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId
    }

    const logoutUser = async () => {
        const response = await fetchWithCSRF('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            setCurrentUserId(null)
        }
    }

    useEffect(() => {

        async function restoreCSRF() {
            const response = await fetch('/api/csrf/restore', {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const authData = await response.json();
                setFetchWithCSRF(() => {
                    return (resource, init) => {
                        if (init.headers) {
                            init.headers['X-CSRFToken'] = authData.csrf_token;
                        } else {
                            init.headers = {
                                'X-CSRFToken': authData.csrf_token
                            }
                        }
                        return fetch(resource, init);
                    }
                });
                if (authData.current_user_id) {
                    console.log(authData)
                    setCurrentUserId(authData.current_user_id)
                }
            }
            setLoading(false)
        }
        restoreCSRF();
    }, []);



    // let location = useLocation();

    return (
        <AuthContext.Provider value={authContextValue}>
            {loading && <div>Loading...</div>}
            {!loading &&
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
                    <nav>
                        <ul>
                            <li><a onClick={logoutUser} href="#" activeclass="active">Logout</a></li>
                        </ul>
                    </nav>
                    <Navigation />
                    <Switch>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/login" component={UserForm}></Route>
                        <Route path="/signup" component={SignUp}></Route>
                        {/* <Route path="/" component={Dealerships}></Route> */}
                    </Switch>
                </BrowserRouter>}
        </AuthContext.Provider>
    );
}

export default App;
