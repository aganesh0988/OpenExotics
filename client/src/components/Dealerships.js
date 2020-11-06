import React from 'react';
import { getDealerships } from '../store/dealerships';
import { connect } from "react-redux";
import DealershipsDisplayed from './DealershipsDisplayed';

class Dealerships extends React.Component {
  constructor() {
    super()
    this.state = {
      dealerships: []
    }
  }

  componentDidMount() {
    this.props.getDealerships();
  }

  render() {
    let items = [];
    if (Object.keys(this.props.dealerships).length === 0) {
      return null;
    } else {
      items = this.props.dealerships.map(dealership => {
        return <DealershipsDisplayed key={dealership.name} dealership={dealership} />
      })
    }
    return (
      <>
        <div className='divBox'>{items}</div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dealerships: state.dealerships,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDealerships: () => dispatch(getDealerships()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dealerships);
