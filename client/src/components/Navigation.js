import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
// import AuthContext from '../auth';


const Navigation = props =>
    <header className='navigation-container'>
        <img
            alt='OELogo'
            className='OELogo-nav' src='/images/OEWhite.jpg' />
        <NavLink to="/users" activeClassName="active">USERS</NavLink>
        {/* <NavLink to="/login" activeClassName="active">LOG IN</NavLink>
        <NavLink to="/signup" activeClassName="active">SIGN UP</NavLink> */}
        <NavLink to='/dealerships' activeClassName="active">DEALERSHIPS</NavLink>
        <NavLink to='/login' activeclass="active">LOG OUT</NavLink>
    </header>
    ;




export default Navigation;
