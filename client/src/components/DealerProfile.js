import React, { useEffect, useState, useContext } from 'react';
// import { Redirect } from 'react-dom';
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"
import './DealerProfile.css'

const DealerProfile = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[2]
    const id = parseInt(idString, 10)
    const { fetchWithCSRF, currentUserId } = useContext(AuthContext);

    const [dealership, setDealership] = useState(id);

    useEffect(() => {

        async function getDealership() {
            const response = await fetch(`/api/home/dealership/${id}`)
            const data = await response.json();

            setDealership(data.dealership);
        }
        getDealership()
    }, [id])


    // ;   const [resTime , setResTime] = useState({})
    const [start_time, setStartTime] = useState("2018-06-12T19:30");


    // const handleStartTime = (e) => {
    //     const { id, value } = e.target;
    //     setStartTime({ ...start_time, [id]: value })
    // }
    // const { date, time } = start_time;
    // const startTime = date + " " + time

    // console.log("STARTTIME", startTime)

    const handleStartTime = (e) => {
        console.log("ETARGET", e.target.value)
        setStartTime(e.target.value)
        console.log("STARTTIME", start_time)
    }

    const handleSubmit = async (e) => {

        // const { date, time } = start_time;
        // const startTime = new Date(date) + " " + time;
        console.log("DATA", start_time)


        e.preventDefault()
        const data = await fetchWithCSRF('/api/home/dealership/reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: currentUserId, dealership_id: id, start_time: start_time }),
            // body: JSON.stringify({ user_id: currentUserId, dealership_id: id, start_time: startTime })
        })


        if (data.ok) {
            history.push(`/dealership/reservation`)
        }
    }


    return (
        <>
            <h1 className="dealerprofile-name">
                <div className="dealerprofile-name-name-main">{dealership.name}</div>
            </h1>
            <div className='dealerprofile-img-text-wrapper'>
                <div className='dealerprofile-name-img-wrapper'>
                    <img alt={dealership.name} className='dealerprofile-name-img-img' src={`/images/${dealership.img}`}></img>
                </div>
                <div className='dealerprofile-name-img-text-wrapper' >
                    <h4 className='dealerprofile-name-address-title'>Located At:</h4>
                    <div className='dealerprofile-name-address'>{dealership.address}</div>
                    <div className='dealerprofile-name-address' >{dealership.city}, {dealership.state}</div>
                    <div className='dealerprofile-name-bio' >{dealership.bio}</div>
                    <div className='dealerprofile-name-tag'>Schedule a meeting with an associate today!</div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="reservation-container">
                                <div>
                                    <label for="meeting-time">Choose a time for your appointment:</label>

                                    <input type="datetime-local" id="meeting-time"
                                        name="meeting-time" value="2018-06-12T19:30" onChange={handleStartTime}></input>
                                    {/* <label>Date</label>
                                    <input type="date" id="date" defaultValue="2020-12-20" onChange={handleStartTime} /> */}
                                    {/* <div className="reservation-form-input" id="time" onChange={handleStartTime}> */}
                                    {/* <label htmlFor="time">Time</label>
                                    <input onChange={handleStartTime}
                                        label="Time"
                                        type="time"
                                        defaultValue="13:00"
                                    /> */}
                                    {/* </div> */}
                                </div>
                            </div>
                            <button className='dealerprofile-name-button'>Reserve</button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DealerProfile
