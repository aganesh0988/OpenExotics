import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
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
                    <button className='dealerprofile-name-button' onClick={Reservations}>Reserve</button>
                </div>
            </div>
        </>
    )
}

export default DealerProfile
