import React from 'react';

const ResProfLayout = (props) => {
    const { reservation } = props;
    console.log("HELLORESPROF", props)


    return (
        <>
            <h1>HI, {reservation.dealership_name}</h1>
        </>
    )

}

export default ResProfLayout;
