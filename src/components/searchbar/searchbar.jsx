import React from 'react';
import { connect } from 'react-redux';
import { getSymbols, getSymbolData, getBookData, getFinancials } from '../../actions/apiActions';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      symbol: '',
    }
    this.handleInput = this.handleInput.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount(){
    // this.props.getSymbols();
  }
  handleInput(type) {
    return (e) => {
      this.setState( {
        [type]: e.target.value
      });
    };
  }
  handleSubmit(e){
    e.preventDefault();
    // if(this.props.mode === "Charts"){
      this.props.getSymbolData(this.state.symbol, '1d');
      this.props.getBookData(this.state.symbol);
      this.props.getFinancials(this.state.symbol);
    // }else if(this.props.mode === "Financials"){
      //
    // }
  }
  render(){
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
        <input className="form-input"
          type="text"
          onChange={this.handleInput('symbol')}
          value={this.state.symbol}
          placeholder="Please input a stock symbol">

        </input>
          <button className="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  symbols: state.symbols,
  mode: state.ui.mode
})

const mapDispatchToProps = dispatch => ({
  getSymbols: () => dispatch(getSymbols()),
  getSymbolData: (symbol, time_period) => dispatch(getSymbolData(symbol, time_period)),
  getBookData: (symbol) => dispatch(getBookData(symbol)),
  getFinancials: (symbol) => dispatch(getFinancials(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
