import React, { useEffect, useState } from 'react';

const ReservationsPage = () => {
    // const { reservation } = props;
    // let history = useHistory()

    // const reservationHandle = () => {
    //     history.push(`dealership/reservation/${reservation.id}`)
    // }

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
            <div>{reservation.user_id}</div>
            <div>{reservation.dealership_id}</div>
            <div>{reservation.start_time}</div>
        </div>)

    return (
        <>
            <h1>RESERVATION COMPLETE</h1>
            <div>{reservationsDisp}</div>
            <h1>RESERVATION COMPLETE</h1>
            <h1>RESERVATION COMPLETE</h1>
            <h1>RESERVATION COMPLETE</h1>
        </>
    )

}

export default ReservationsPage
