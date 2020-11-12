import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
// import AuthContext from '../auth';


const Navigation = props =>
    <header className='navigation-container'>
        <img alt='OELogo' className='OELogo-nav' src='/images/OEWhite.jpg' />
        <div className="navlink-container">
            <NavLink to="/users" activeClassName="active" className="active-nav">Users</NavLink>
            <NavLink to='/dealerships' activeClassName="active" className="active-nav">Dealerships</NavLink>
            <NavLink to='/login' activeclass="active" className="active-nav">Log Out</NavLink>
        </div>
    </header>
    ;




export default Navigation;
