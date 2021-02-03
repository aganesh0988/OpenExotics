import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'

const ReservationsProfile = () => {

    useEffect(() => {
        async function getReservationsProfile() {
            const response = await fetch(`/api/home/dealership/reservations/profile/${userID}`)
        }
    })

}

export default ReservationsProfile
