import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


const Navigation = props => {

    const [input, setInput] = useState('')
    const [options, setOptions] = useState()

    const handleSearch = async (e) => {
        setInput(e.target.value)
        setOptions([])
        const searchStr = e.target.value;
        const data = await fetch(`/api/home/search/${searchStr}`)
        if (data.ok) {
            const dealerList = await data.json()
            setOptions(dealerList.dealerships)
        }
    }


    return (
        <>
            <header className='navigation-container'>
                <NavLink to='/dealerships'>
                    <img alt='OELogo' className='OELogo-nav' src='/images/OEWhite.jpg' />
                </NavLink>
                <div className="navlink-container">
                    <div className="navlink-container__search">
                        <input type="search" onChange={handleSearch} value={input} placeholder="Search" autoComplete="off"></input>
                        <div className="navlink-container__search-choices">
                            {options ? options.map(option =>
                                <div className="navlink-container__search-choices-div" key={option.id}>
                                    <a href={`/dealership/${option.id}`}>{option.name}</a>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <NavLink to='/dealerships' activeClassName="active" className="active-nav">Dealerships</NavLink>
                    <NavLink to='/login' activeclass="active" className="active-nav">Log Out</NavLink>
                </div>
            </header>
        </>
    );


}

export default Navigation;
