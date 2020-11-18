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

    //     let localT = {{ reservation.start_time }}.toLocaleString("en-US", { timeZone: "America/New_York" });
    // console.log('USA time: '+ (new Date(usaTime)).toISOString())
    const convdate = (time) => {
        // const date = new Date(time.toString())
        // return date.toString()
        const date = new Date(time.toString())
        const dateDate = date.toString()
        const minusEnd = dateDate.substring(0, dateDate.indexOf(':00'))
        return minusEnd
    }

    const reservationsDisp = reservations.map((reservation) =>
        <div key={reservation.id}>
            <div className="reservation-page-header">
                <h1>{reservation.user_name}, your reservation with {reservation.dealership_name} has been confirmed!</h1>
                <img alt={reservation.dealership_img} className='reservation-page-header-img' src={`/images/${reservation.dealership_img}`}></img>
            </div>

            <div className="reservation-page__time">Reservation to meet with a sales associate is set for: {convdate(reservation.start_time)}</div>
            <button className="reservation-page__cancel button">Cancel Reservation</button>
        </div>)

    return (
        <>
            <div>{reservationsDisp}</div>
        </>
    )

}

export default ReservationsPage
