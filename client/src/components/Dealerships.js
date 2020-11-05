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
      if (Object.keys(this.props.dealerships).length === 0) return null;
      let items = [];
      if (this.props.match.params.categoryId) {
        items = this.props.products.map(product => {
          if (product.categoryId.toString() === this.props.match.params.categoryId) {
            return <ProductsDisplayed key={product.name} product={product} />
          }
          return null//might need to change if anything breaks
        })
      } else {
        items = this.props.products.map(product => {
          return <ProductsDisplayed key={product.name} product={product} />
        })
      }
      return (
        <>
          <div className='divBox'>{items}</div>
          <div className='categories-side-panel'>
            <Categories />
          </div>
        </>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      products: state.products,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getProducts: () => dispatch(getProducts()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);
  