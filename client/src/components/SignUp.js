import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

function SignUp(props) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        name: "",
        password: "",
    });
    const [submitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, username } = user;
        const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                username,
            }),
        });
        if (response.ok) {
            props.history.push("/cases");
        }
    };




    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form name="form" className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className={
                            "form-control" + (submitted && !user.name ? " is-invalid" : "")
                        }
                    />
                    {submitted && !user.name && (
                        <div className="invalid-feedback">Name is required</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className={
                            "form-control" + (submitted && !user.email ? " is-invalid" : "")
                        }
                    />
                    {submitted && !user.email && (
                        <div className="invalid-feedback">Email is required</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className={
                            "form-control" +
                            (submitted && !user.username ? " is-invalid" : "")
                        }
                    />
                    {submitted && !user.username && (
                        <div className="invalid-feedback">Username is required</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className={
                            "form-control" +
                            (submitted && !user.password ? " is-invalid" : "")
                        }
                    />
                    {submitted && !user.password && (
                        <div className="invalid-feedback">Password is required</div>
                    )}
                </div>
                <div className="form-group-btn">
                    <button className="btn btn-primary">
                        {<span className="spinner-border spinner-border-sm mr-1"></span>}Register</button>
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
export default SignUp;
