import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'
import './ReservationsPage.css'


const ReservationsPage = () => {

    const history = useHistory()
    const [reservations, setReservations] = useState([])
    const { fetchWithCSRF } = useContext(AuthContext);

    useEffect(() => {
        async function getReservations() {
            const response = await fetch('/api/home/dealership/reservation/')
            const data = await response.json();
            setReservations(data.reservations);
        }
        getReservations()
    }, [])

    const handleCancel = async (e) => {
        const resId = e.target.value
        const response = await fetchWithCSRF(`/api/home/dealership/reservation/${resId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                resId
            })
        })
        if (response.ok) {
            window.alert("Your reservation has been canceled.")
            history.push('/dealerships')
        }
    }

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
                <div className="reservation-page__time">Your reservation to meet with a sales associate is scheduled for: {convdate(reservation.start_time)}</div>
                <img alt={reservation.dealership_img} className='reservation-page-header-img' src={`/images/${reservation.dealership_img}`}></img>
                <button value={reservation.id} onClick={handleCancel} className="reservation-page__cancel-button">Cancel Reservation</button>
            </div>

        </div>)

    return (
        <>
            <div>{reservationsDisp}</div>
        </>
    )

}

export default ReservationsPage
