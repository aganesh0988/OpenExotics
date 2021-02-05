import React from 'react';
import { useHistory } from 'react-router-dom';

const ResProfLayout = (props) => {
    const { reservation } = props;
    console.log("HELLORESPROF", reservation)


    return (
        <>
            <h1>HI, {reservation.id}</h1>
        </>
    )

}

export default ResProfLayout;
