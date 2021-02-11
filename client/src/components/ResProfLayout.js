import React from 'react';

const ResProfLayout = (props) => {
    const { reservation } = props;


    return (
        <>
            <h1>{reservation.dealership_name}</h1>
        </>
    )

}

export default ResProfLayout;
