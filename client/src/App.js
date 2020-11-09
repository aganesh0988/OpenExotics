import React from 'react';
import { Switch, Route, useLocation, } from 'react-router-dom';

import UserForm from './components/LoginForm';
import UserList from './components/UsersList';
import Dealerships from './components/Dealerships';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import AuthContext from './auth'


function App() {

    let location = useLocation();

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
                    setCurrentUserId(authData.current_user_id)
                }
            }
            setLoading(false)
        }
        restoreCSRF();
    }, []);


    return (
        <>
            <AuthContext.Provider value={authContextValue}>
                {location.pathname !== '/login' && location.pathname !== '/signup' ?
                    <Navigation />
                    : null}
                <Switch>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/login" component={UserForm}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/">
                        <Dealerships />
                    </Route>
                    <Route path="/dealerships" component={Dealerships}></Route>
                    <Route path="/login" onClick={logoutUser}></Route>
                </Switch>
            </AuthContext.Provider>
        </>
    );
}

export default App;
