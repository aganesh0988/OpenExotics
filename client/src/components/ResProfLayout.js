import React from 'react';

const ResProfLayout = (props) => {
    const { reservation } = props;


    return (
        <>
            <div>{reservation.dealership_name}</div>
        </>
    )

}

export default ResProfLayout;
