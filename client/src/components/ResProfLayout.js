import React from 'react';
import { useHistory } from 'react-router-dom';

const ResProfLayout = (props) => {
    const { reservation } = props;
    console.log("HELLORESPROF", props)


    return (
        <>
            <h1>HI, {reservation}</h1>
        </>
    )

}

export default ResProfLayout;
