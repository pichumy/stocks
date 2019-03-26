import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../sidebar/sidebar';
import SearchBar from '../searchbar/searchbar';
import ChartData from './chartdata';
import FinancialData from './financialData';
import { removeSymbol, getSymbolData, getBookData, getFinancials } from '../../actions/apiActions';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let previousStocks = document.cookie.split(',');
    previousStocks.forEach(symbol => {
      this.props.getSymbolData(symbol, '1d');
      this.props.getBookData(symbol);
      this.props.getFinancials(symbol);
    })
  }

  componentDidUpdate(){
    document.cookie = Object.keys(this.props.data);
  }

  render(){
    let content = [];
    // Chart Data
    console.log(this.props);
    if(this.props.mode === "Charts"){
      if(Object.keys(this.props.data).length > 0){
        Object.keys(this.props.data).forEach( (symbol, idx) => {
          content.push(<ChartData key={idx} symbol={symbol} removeSymbol={this.props.removeSymbol} data={this.props.data[symbol]} />);
        })
      }else{
        content = [];
      }
    }else if(this.props.mode === "Financials"){
        Object.keys(this.props.financials).forEach((symbol, idx) => {
          content.push(<FinancialData key={idx} symbol={symbol} removeSymbol={this.props.removeSymbol} data={this.props.financials[symbol].data} />);
        });
    }

    return(
      <div className="main-container">
        <Sidebar />
        <div className="content-container">
          <SearchBar />
          { content }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.symbols,
  mode: state.ui.mode,
  financials: state.financials
})

const mapDispatchToProps = dispatch => ({
  removeSymbol: (symbol) => dispatch(removeSymbol(symbol)),
  getSymbolData: (symbol, time_period) => dispatch(getSymbolData(symbol, time_period)),
  getBookData: (symbol) => dispatch(getBookData(symbol)),
  getFinancials: (symbol) => dispatch(getFinancials(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
