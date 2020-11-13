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
      <div className="about-OE-header__video">
        <iframe width="560" height="315" title='SP2' src="https://www.youtube.com/embed/j6xHfwTNo14?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      </div>
      <div className="about-OE-header">
        <h3>At Open Exotics you can you can reserve a time slot to meet with a sales associate at the dealership of your interest. Click on any of the dealerships below to view more information and to set up a meeting.</h3>
      </div>
      <div>{dealershipComp}</div>
    </>
  )
}
export default Dealerships
