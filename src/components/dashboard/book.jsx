import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Book extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let data = this.props.books[this.props.symbol];
    if(data){
      return (
        <div>
          <div>Open: {data.data.quote.open}</div>
          <div>High: {data.data.quote.high}</div>
          <div>Low: {data.data.quote.low}</div>
          <div>Mktd cap: {data.data.quote.marketCap}</div>
          <div>P/E Ratio: {data.data.quote.peRatio}</div>
        </div>
      )
    }else{
      return(<div></div>)
    }
  }
}

Book.proptypes = {
  symbol: PropTypes.string.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  books: state.books
})

export default connect(mapStateToProps)(Book);
