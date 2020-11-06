import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'


function UserForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId, setCurrentUsername } = useContext(AuthContext);
    const submitForm = (e) => {
        e.preventDefault();

        async function loginUser() {
            const response = await fetchWithCSRF(`/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                setCurrentUserId(responseData.current_user_id)
                history.push('/users')
            }
        }
        loginUser();
    }
    return (
        <div className="login-form-container">
            <h1 className="login-form-title">Login</h1>
            <form className="login-form">
                {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
                <div className="field">
                    <label>Username: </label>
                    <div className="control">
                        <input className="form-input input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                    </div>
                    <label>Password: </label>
                    <div className="control">
                        <input className="form-input input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                    </div>
                </div>
                <div className="login-username-submit-container">
                    <button onClick={submitForm} className="forms-button" variant="contained" color="primary">Login</button>
                </div>
            </form>
        </div>
    );
}
export default UserForm;
