import React from 'react';



const DealershipsDisplayed = (props) => {
    const { dealership } = props;
    return (
        <div className='dealership-img-wrapper'>
            <div className='dealership-img-container'>
                <div
                    alt={dealership.name}
                    className='dealership-img-img'
                    style={{ backgroundImage: `url(/images/${dealership.img})` }}>
                </div>
                <div className='dealership-img-name'>
                    <h4 className='dealership-img-name__name'>{dealership.name}</h4>
                    <div>${dealership.address}</div>
                </div>
            </div>
        </div >
    )
}



export default DealershipsDisplayed;
