import React, { useState } from 'react';
import './DealershipsDisplayed.css'
import DealerProfile from './DealerProfile'
import { Redirect, useHistory } from 'react-router-dom';
// import Reservations from './Reservations';



const DealershipsDisplayed = (props) => {
    const { dealership } = props;
    let history = useHistory()
    // const [submit, setSubmit] = useState(false)

    const dealershipHandle = () => {
        console.log("DEALERSHIP ID!!!!!", dealership.id)
        // setSubmit(true)
        history.push(`dealership/${dealership.id}`)
        // return <DealerProfile component={dealership} />
    }

    return (
        <div className='dealership-img-wrapper'>
            <div className='dealership-img-container'>
                {/* <div
                    alt={dealership.name}
                    className='dealership-img-img'
                    style={{ backgroundImage: `url(/images/${dealership.img})` }}>
                </div> */}
                <img alt={dealership.name} onClick={dealershipHandle} className='dealership-img-img' src={`/images/${dealership.img}`}></img>
                <div className='dealership-img-name'>
                    <h4 className='dealership-img-name__name'>{dealership.name}</h4>
                    <div className='dealership-img-name_address'>{dealership.address}</div>
                    <div className='dealership-img-name_city_state'>{dealership.city}, {dealership.state}</div>
                    <div className='dealership-img-name_bio' >{dealership.bio}</div>
                </div>
                {/* <button onClick={} >Reservations</button> */}
            </div>
            <div>
                {/* <DealerProfile component={props} /> */}
            </div>
        </div >
    )
}



export default DealershipsDisplayed;


// import React from 'react';


// function DealershipsDisplayed(props) {
//     return (
//         <>
//             <strong>NAME</strong> {props.dealership.name}<br />
//             <strong>IMAGE</strong> {props.dealership.img}<br />
//             <hr />
//         </>
//     );
// }
// export default DealershipsDisplayed;
