import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const ReservationsProfile = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[4]
    const userID = parseInt(idString, 10)

    const [reservationsProf, setReservationsProf] = useState(userID)

    useEffect(() => {
        async function getReservationsProfile() {
            console.log("HELLLOOOOOOOOOOOOOOOthere")
            const response = await fetch(`/api/home/dealership/reservations/profile/${userID}`)
            const data = await response.json();
            setReservationsProf(data.reservationsProf)
        }
        getReservationsProfile()
    }, [userID])

    return (
        <>
            <h1>Hello,</h1>
        </>
    )

}

export default ReservationsProfile
