import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'
import './LoginForm.css'


function UserForm(props) {
    const [username, setUsername] = useState("Demo");
    const [password, setPassword] = useState("password");
    let history = useHistory();

    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);
    const submitForm = (e) => {
        e.preventDefault();

        async function loginUser() {
            const response = await fetchWithCSRF('/login', {
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
                const { errors } = responseData
                setErrors(errors);
                // setErrors(responseData.errors);
            } else {
                setCurrentUserId(responseData.current_user_id)
                history.push('/dealerships')
            }
        }
        loginUser();
    }
    return (
        <div className="login-form-container-main">
            <img alt='OELogoW' className='OELogoW' src='/images/OEWhite.jpg' />
            <div className="login-form-container">
                <h1 className="login-form-title">Login</h1>
                <form className="login-form">
                    <div className="field">
                        <label>Username: </label>
                        <div className="control">
                            <input className="form-input input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.username && errors.username.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                        <label>Password: </label>
                        <div className="control">
                            <input className="form-input input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.password && errors.password.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="login-username-submit-container">
                        <button onClick={submitForm} className="forms-button" variant="contained" color="primary">Login</button>
                    </div>
                    <div className="login-signup">
                        <span>
                            <span>Not a member?  </span>
                            <a className="login-signup-links" href="/signup"> Sign up</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default UserForm;
