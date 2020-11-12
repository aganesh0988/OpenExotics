import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../auth"
import './SignUp.css'

function SignUp(props) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { fetchWithCSRF } = useContext(AuthContext);
    const [errors, setErrors] = useState([])

    let history = useHistory();

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await fetchWithCSRF('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password, name: name, username: username, email: email }),
        })

        if (data.ok) {
            console.log("data ok")
            // const response = await data.json();
            // setCurrentUserId(data.current_user_id)
            history.push('/dealerships')
            // return <Redirect to={'/'} />
        }
        else {
            const response = await data.json();
            const { errors } = response
            setErrors(errors)
        }
    }


    return (
        <div className="signup-form-container-main">
            <img alt='OELogoW' className='OELogoW' src='/images/OEWhite.jpg' />
            <div className="signup-form-container">
                <h1 className="signup-title">Sign Up</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="signup-name-confirm-container">
                        <div>
                            <label>Name:</label>
                        </div>
                        <div>
                            <input className="form-input" onChange={handleName} value={name} type="name" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.confirm && errors.confirm.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="signup-username-username-container">
                        <div>
                            <label>Username:</label>
                        </div>
                        <div>
                            <input className="form-input" onChange={handleUsername} value={username} type="text" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.username && errors.username.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="signup-username-email-container">
                        <div>
                            <label>Email:</label>
                        </div>
                        <div>
                            <input className="form-input" onChange={handleEmail} value={email} type="text" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.email && errors.email.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="signup-username-password-container">
                        <div>
                            <label>Password:</label>
                        </div>
                        <div>
                            <input className="form-input" onChange={handlePassword} value={password} type="password" />
                        </div>
                        <div className="errors-div">
                            {errors && errors.password && errors.password.map(error =>
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="signup-username-submit-container">
                        <button className="forms-button" variant="contained" color="primary" type="submit" >Signup</button>
                    </div>
                    <div>
                        <div>Already a member?</div>
                        <a href="/login">Log In</a>
                    </div>
                </form>
            </div>
        </div>
    );


    // return (
    //     <div className="sign-up-container">
    //         <h2>Sign Up</h2>
    //         <form name="form" className="signup-form" onSubmit={handleSubmit}>
    //             <div className="form-group">
    //                 <label>Name</label>
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     value={user.name}
    //                     onChange={handleChange}
    //                     className={
    //                         "form-control" + (submitted && !user.name ? " is-invalid" : "")
    //                     }
    //                 />
    //                 {submitted && !user.name && (
    //                     <div className="invalid-feedback">Name is required</div>
    //                 )}
    //             </div>
    //             <div className="form-group">
    //                 <label>Email</label>
    //                 <input
    //                     type="text"
    //                     name="email"
    //                     value={user.email}
    //                     onChange={handleChange}
    //                     className={
    //                         "form-control" + (submitted && !user.email ? " is-invalid" : "")
    //                     }
    //                 />
    //                 {submitted && !user.email && (
    //                     <div className="invalid-feedback">Email is required</div>
    //                 )}
    //             </div>
    //             <div className="form-group">
    //                 <label>Username</label>
    //                 <input
    //                     type="text"
    //                     name="username"
    //                     value={user.username}
    //                     onChange={handleChange}
    //                     className={
    //                         "form-control" +
    //                         (submitted && !user.username ? " is-invalid" : "")
    //                     }
    //                 />
    //                 {submitted && !user.username && (
    //                     <div className="invalid-feedback">Username is required</div>
    //                 )}
    //             </div>
    //             <div className="form-group">
    //                 <label>Password</label>
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     value={user.password}
    //                     onChange={handleChange}
    //                     className={
    //                         "form-control" +
    //                         (submitted && !user.password ? " is-invalid" : "")
    //                     }
    //                 />
    //                 {submitted && !user.password && (
    //                     <div className="invalid-feedback">Password is required</div>
    //                 )}
    //             </div>
    //             <div className="form-group-btn">
    //                 <button className="btn btn-primary">
    //                     {<span className="spinner-border spinner-border-sm mr-1"></span>}Register</button>
    //                 <Link to="/login" className="btn btn-link">Cancel</Link>
    //             </div>
    //         </form>
    //     </div>
    // );
}
export default SignUp;
