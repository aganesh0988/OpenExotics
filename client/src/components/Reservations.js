import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Reservations = () => {

    const [user_id, setUserid] = useState('');
    const [dealership_id, setDealershipid] = useState('');
    const [start_time, setStartTime] = useState('');

    const handleUserid = (e) => {
        setUserid(e.target.value)
    }

    const handleDealershipid = (e) => {
        setDealershipid(e.target.value)
    }

    const handleStartTime = (e) => {
        setStartTime(e.target.value)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log("handleSubmit")
        // const data = await fetch('/api/home/dealership/reservation', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ user_id: user_id, dealership_id: dealership_id, start_time: start_time })
        // })

        // if (data.ok) {
        //     return <Redirect to={'/dealerships'} />
        // }

    }


    // useEffect(() => {
    //   async function getReservations() {
    //     const response = await fetch('/api/home/dealership/reservation')
    //     const data = await response.json();

    //     console.log("THIS IS THE RESPONSE", data.reservations)
    //     setReservations(data.reservations);
    //   }
    //   getReservations()
    // }, [])




    return (
        <>
            <form>
                <div className="reservation-container">
                    <div>
                        <label>User id</label>
                    </div>
                    <div>
                        <input className="reservation-form-input" onChange={handleUserid} value={user_id} type="text" />
                    </div>
                </div>
                <div className="reservation-container">
                    <div>
                        <label>Restaurant id</label>
                    </div>
                    <div>
                        <input className="reservation-form-input" onChange={handleDealershipid} value={dealership_id} type="text" />
                    </div>
                </div>
                <div className="reservation-container">
                    <div>
                        <label>Start Time</label>
                    </div>
                    <div>
                        <input className="reservation-form-input" onChange={handleStartTime} value={start_time} type="text" />
                    </div>
                </div>
            </form>
        </>
    )
}
export default Reservations
