import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ReservationsPage = () => {
    // const { reservation } = props;
    // let history = useHistory()

    // const reservationHandle = () => {
    //     history.push(`dealership/reservation/${reservation.id}`)
    // }
    const history = useHistory()
    const idString = history.location.pathname.split('/')[2]
    const id = parseInt(idString, 10)

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        async function getReservations() {
            const response = await fetch('/api/home/dealership/reservation/')
            const data = await response.json();

            console.log("THIS IS THE RESPONSE", data.reservations)
            setReservations(data.reservations);
        }
        getReservations()
    }, [])


    const reservationsDisp = reservations.map((reservation) =>
        <div>
            <h1>Your reservation with {reservation.dealership_name} has been booked!</h1>
            <div>{reservation.user_id}</div>
            <div>{reservation.dealership_id}</div>
            <div>{reservation.start_time}</div>
        </div>)

    return (
        <>
            <div>{reservationsDisp}</div>
        </>
    )

}

export default ReservationsPage
