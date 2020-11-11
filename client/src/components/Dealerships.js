import React, { useEffect, useState } from 'react';
import DealershipsDisplayed from './DealershipsDisplayed';



const Dealerships = () => {

  const [dealerships, setDealerships] = useState([]);

  useEffect(() => {
    async function getDealerships() {
      const response = await fetch('/api/home')
      const data = await response.json();

      setDealerships(data.dealerships);
    }
    getDealerships()
  }, [])

  const dealershipComp = dealerships.map((dealership) => <DealershipsDisplayed key={dealership.id} dealership={dealership} />)


  return (
    <>
      <div>{dealershipComp}</div>
    </>
  )
}
export default Dealerships
