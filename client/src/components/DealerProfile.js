import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
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
            <h1 className="dealerprofile-name">{dealership.name}</h1>

            <img alt={dealership.name} className='dealership-img-img-dealer' src={`/images/${dealership.img}`}></img>
            <div>{dealership.address}</div>
            <div>{dealership.city}, {dealership.state}</div>
            <div>{dealership.bio}</div>
            <div>Schedule a meeting with an associate today!</div>
            {/* <button onClick={Reservations}>Reserve</button> */}
            {/* <div
                    alt={dealership.name}
                    className='dealership-img-img'
                    style={{ backgroundImage: `url(/images/${dealership.img})` }}>
            </div> */}
        </>
    )
}

export default DealerProfile
