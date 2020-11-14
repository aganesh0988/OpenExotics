import React from 'react';
import './DealershipsDisplayed.css'
import { useHistory } from 'react-router-dom';


const DealershipsDisplayed = (props) => {
    const { dealership } = props;
    let history = useHistory()

    const dealershipHandle = () => {
        history.push(`dealership/${dealership.id}`)
    }

    return (
        <div className='dealership-img-wrapper'>
            <div className='dealership-img-container' onClick={dealershipHandle}>
                <div className="dealership-img-img_container">
                    <img alt={dealership.name} className='dealership-img-img' src={`/images/${dealership.img}`}></img>
                </div>
                <div className='dealership-img-name'>
                    <h4 className='dealership-img-name__name'>{dealership.name}</h4>
                    <div className='dealership-img-name__state'>State:  {dealership.state}</div>
                    <div className='dealership-img-name__city'>City:  {dealership.city}</div>
                    <div className='dealership-img-name__bio' >{dealership.bio}</div>
                    <div className='dealership-img-name__meeting'>Schedule a meeting with a sales associate today!</div>
                </div>
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
