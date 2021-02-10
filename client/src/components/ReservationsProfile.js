import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import ResProfLayout from './ResProfLayout'

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
    }, [])

    console.log('outsideeeeeeeeeeee', reservations)

    const allReservations = reservations.map((reservation) => <ResProfLayout key={reservation.user_id} reservation={reservation} />)

    return (
        <>
            <h1>Hello, </h1>
            {/* <div>{allReservations}</div> */}
        </>
    )

}

export default ReservationsProfile
