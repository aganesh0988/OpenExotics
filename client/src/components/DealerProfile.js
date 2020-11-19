import React, { useEffect, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"
import './DealerProfile.css'

const DealerProfile = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[2]
    const id = parseInt(idString, 10)
    const { fetchWithCSRF, currentUserId } = useContext(AuthContext);

    const [dealership, setDealership] = useState(id);
    const [errors, setErrors] = useState([]);

    useEffect(() => {

        async function getDealership() {
            const response = await fetch(`/api/home/dealership/${id}`)
            const data = await response.json();

            setDealership(data.dealership);
        }
        getDealership()
    }, [id])


    const [start_time, setStartTime] = useState();
    // const [start_time, setStartTime] = useState("2020-12-12T12:00");


    const handleStartTime = (e) => {
        setStartTime(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await fetchWithCSRF('/api/home/dealership/reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: currentUserId, dealership_id: id, start_time: start_time }),
        })
        const response = await data.json();
        if (data.ok) {
            history.push(`/dealership/reservation`)
        } else {
            const { errors } = response
            setErrors(errors)
        }
    }


    return (
        <>
            <h1 className="dealerprofile-name">
                <div className="dealerprofile-name-name-main">{dealership.name}</div>
            </h1>
            <div className='dealerprofile-img-text-wrapper'>
                <div className='dealerprofile-name-img-wrapper'>
                    <img alt={dealership.name} className='dealerprofile-name-img-img' src={`/images/${dealership.img}`}></img>
                </div>
                <div className='dealerprofile-name-img-text-wrapper' >
                    <h4 className='dealerprofile-name-address-title'>Located At:</h4>
                    <div className='dealerprofile-name-address'>{dealership.address}</div>
                    <div className='dealerprofile-name-address' >{dealership.city}, {dealership.state}</div>
                    <div className='dealerprofile-name-bio' >{dealership.bio}</div>
                    <div className='dealerprofile-name-tag'>Schedule a meeting with an associate today!</div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="reservation-container">
                                <label className="meeting-time">Select your meeting time:</label>
                                <input type="datetime-local" id="meeting-time__input"
                                    name="meeting-time" onChange={handleStartTime} ></input>
                                <div className="reservation-errors-div">
                                    {errors && errors.start_time && errors.start_time.map(error =>
                                        <p key={errors}>{error}</p>
                                    )}
                                </div>
                                <button className='dealerprofile-name-button'>Reserve</button>
                                <input type="hidden" id="timezone" name="timezone" value="-06:00"></input>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DealerProfile
