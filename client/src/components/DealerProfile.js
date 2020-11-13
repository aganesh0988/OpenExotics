import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"
import Reservations from './Reservations';
import './DealerProfile.css'

const DealerProfile = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[2]
    const id = parseInt(idString, 10)

    const [dealership, setDealership] = useState(id);

    useEffect(() => {

        async function getDealership() {
            const response = await fetch(`/api/home/dealership/${id}`)
            const data = await response.json();

            setDealership(data.dealership);
        }
        getDealership()
    }, [id])





    const [user_id, setUserid] = useState('');
    const [dealership_id, setDealershipid] = useState('');
    const [start_time, setStartTime] = useState('');
    const { fetchWithCSRF } = useContext(AuthContext);



    const handleUserid = (e) => {
        setUserid(e.target.value)
    }

    const handleDealershipid = (e) => {
        setDealershipid(e.target.value)
    }

    const handleStartTime = (e) => {
        setStartTime(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("handleSubmit")
        console.log(user_id, dealership_id)
        const data = await fetchWithCSRF('/api/home/dealership/reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user_id, dealership_id: dealership_id }),
        })

        if (data.ok) {
            history.push('/dealerships')
            // return <Redirect to={'/dealerships'} />
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
                                <div>
                                    <label>User id</label>
                                </div>
                                <div>
                                    <input className="reservation-form-input" onChange={handleUserid} value={user_id} type="text" />
                                </div>
                            </div>
                            <div className="reservation-container">
                                <div>
                                    <label>Dealership id</label>
                                </div>
                                <div>
                                    <input className="reservation-form-input" onChange={handleDealershipid} value={dealership_id} type="text" />
                                </div>
                            </div>
                            <div className="reservation-container">
                                <div>
                                    <label>Date</label>
                                    <input type="date" id="date" onChange={handleStartTime} />
                                    <div className='reserv__time' id="time" onChange={handleStartTime}>
                                        <label htmlFor="time">Time</label>
                                        <input
                                            id="time"
                                            label="Time"
                                            type="time"
                                            defaultValue="19:30"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='dealerprofile-name-button'>Reserve</button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DealerProfile
