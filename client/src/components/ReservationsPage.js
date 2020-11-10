import React, { useEffect, useState } from 'react';

const ReservationsPage = () => {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        async function getReservations() {
            const response = await fetch('/api/home/dealership/reservation')
            const data = await response.json();

            console.log("THIS IS THE RESPONSE", data.reservations)
            setReservations(data.reservations);
        }
        getReservations()
    }, [])


    const reservationsDisp = reservations.map((reservation) =>
        <div>
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
