import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../auth'
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
            console.log("DEALERLIST", dealerList)
            setOptions(dealerList.dealerships)
        }
    }

    // const [input, setInput] = useState([])
    // const { fetchWithCSRF } = useContext(AuthContext);

    // const searchWord = (e) => {
    //     setInput(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleSearch();
    // }
    // const handleSearch = async (e) => {
    //     const data = await fetchWithCSRF(`/api/home/search/`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ input })
    //     })
    //     if (data.ok) {
    //         const dealerList = await data.json()
    //         return dealerList.dealerships
    //     }

    // }


    return (
        <>
            <header className='navigation-container'>
                <img alt='OELogo' className='OELogo-nav' src='/images/OEWhite.jpg' />
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
                    {/* <form onSubmit={handleSubmit}>
                        <input onChange={searchWord} type="text" value={input}></input>
                        <button type="submit">Search</button>
                    </form> */}
                    {/* <NavLink to="/users" activeClassName="active" className="active-nav">Users</NavLink> */}
                    <NavLink to='/dealerships' activeClassName="active" className="active-nav">Dealerships</NavLink>
                    <NavLink to='/login' activeclass="active" className="active-nav">Log Out</NavLink>
                </div>
            </header>
        </>
    );


}

export default Navigation;
