import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'

const ReservationsProfile = () => {

    const [reservationsProf, setReservationsProf] = useState([])

    useEffect(() => {
        async function getReservationsProfile() {
            const response = await fetch(`/api/home/dealership/reservations/profile/${userID}`)
            const data = await response.json();
            setReservationsProf(data.reservationsProf)
        }
        getReservationsProfile()
    }, [])

    return (
        <>
            <h1>Hello</h1>
        </>
    )

}

export default ReservationsProfile
