// import React from 'react';
// import { getDealerships } from '../store/dealerships';
// import { connect } from "react-redux";
// import DealershipsDisplayed from './DealershipsDisplayed';

// class Dealerships extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       dealerships: []
//     }
//   }

//   componentDidMount() {
//     this.props.getDealerships();
//   }

//   render() {
//     let items = [];
//     if (Object.keys(this.props.dealerships).length === 0) {
//       return null;
//     } else {
//       items = this.props.dealerships.map(dealership => {
//         return <DealershipsDisplayed key={dealership.name} dealership={dealership} />
//       })
//     }
//     return (
//       <>
//         <div className='divBox'>{items}</div>
//       </>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     dealerships: state.dealerships,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getDealerships: () => dispatch(getDealerships()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dealerships);


import React, { useEffect, useState } from 'react';
import DealershipsDisplayed from './DealershipsDisplayed';



const Dealerships = () => {

  const [dealerships, setDealerships] = useState([]);

  useEffect(() => {
    async function getDealerships() {
      const response = await fetch('/api/home')
      const data = await response.json();

      console.log("THIS IS THE RESPONSE", data.dealerships)
      setDealerships(data.dealerships);
    }
    getDealerships()
  }, [])

  const dealershipComp = dealerships.map((dealership) => <DealershipsDisplayed key={dealership.id} dealership={dealership} />)


  return (
    <>
      <h1>Hello</h1>
      <div>{dealershipComp}</div>
    </>
  )
}
export default Dealerships
