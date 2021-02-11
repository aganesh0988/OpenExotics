import React from 'react';

const ResProfLayout = (props) => {
    const { reservation } = props;


    return (
        <>
            <div>{reservation.dealership_name}</div>
            <div>{reservation.start_time}</div>
        </>
    )

}

export default ResProfLayout;
