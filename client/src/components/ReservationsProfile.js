import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const ReservationsProfile = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[4]
    const userID = parseInt(idString, 10)

    const [reservations, setReservationsProf] = useState(userID)

    useEffect(() => {
        async function getReservationsProfile() {
            const response = await fetch(`/api/home/dealership/reservations/profile/${userID}`)
            const data = await response.json();
            setReservationsProf(data.reservations)
            console.log("HELLLOOOOOOOOOOOOOOOthere", data.reservations)
        }
        getReservationsProfile()
    }, [userID])

    return (
        <>
            <h1>Hello, </h1>
        </>
    )

}

export default ReservationsProfile
