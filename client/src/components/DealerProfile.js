import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const DealerProfile = () => {
    const history = useHistory()
    const idStr = history.location.pathname.split('/')[2]
    const id = parseInt(idStr, 10)

    const [dealership, setDealership] = useState(id);

    useEffect(() => {

        async function getDealership() {
            const response = await fetch(`/api/home/dealership/${id}`)
            const data = await response.json();

            setDealership(data.dealership);
        }
        getDealership()
    }, [])



    return (
        <>
            <h1>Dealer Profile</h1>
            <div>{dealership.img}</div>
            <div>{dealership.name}</div>
        </>
    )
}

export default DealerProfile
