import React, { useEffect, useState } from 'react';
import './ReservationsPage.css'

const ReservationsPage = () => {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        async function getReservations() {
            const response = await fetch('/api/home/dealership/reservation/')
            const data = await response.json();
            setReservations(data.reservations);
        }
        getReservations()
    }, [])

    // let localT = {{reservation.start_time}}.toLocaleString("en-US", {timeZone: "America/New_York"});
    // console.log('USA time: '+ (new Date(usaTime)).toISOString())


    const reservationsDisp = reservations.map((reservation) =>
        <div key={reservation.id}>
            <div className="reservation-page-header">
                <h1>{reservation.user_name}, your reservation with {reservation.dealership_name} has been confirmed!</h1>
                <img alt={reservation.dealership_img} className='reservation-page-header-img' src={`/images/${reservation.dealership_img}`}></img>
            </div>

            {/* <div>{reservation.start_time}</div> */}
            <button>Cancel Reservation</button>
        </div>)

    return (
        <>
            <div>{reservationsDisp}</div>
        </>
    )

}

export default ReservationsPage
