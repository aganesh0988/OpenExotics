import React from 'react';
import './DealershipsDisplayed.css'
// import Reservations from './Reservations';



const DealershipsDisplayed = (props) => {
    const { dealership } = props;
    return (
        <div className='dealership-img-wrapper'>
            <div className='dealership-img-container'>
                {/* <div
                    alt={dealership.name}
                    className='dealership-img-img'
                    style={{ backgroundImage: `url(/images/${dealership.img})` }}>
                </div> */}
                <img alt={dealership.name} className='dealership-img-img' src={`/images/${dealership.img}`}></img>
                <div className='dealership-img-name'>
                    <h4 className='dealership-img-name__name'>{dealership.name}</h4>
                    <div className='dealership-img-name_address'>{dealership.address}</div>
                    <div className='dealership-img-name_city_state'>{dealership.city}, {dealership.state}</div>
                    <div className='dealership-img-name_bio' >{dealership.bio}</div>
                </div>
                {/* <button onClick={} >Reservations</button> */}
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
