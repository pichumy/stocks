import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Chart from './chart';
import Book from './book';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Content extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: 0,
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, value){
      this.setState({ value });
    }

    removeSymbol(symbol){
      return (e) => {
        this.props.removeSymbol(symbol);
      }
    }

    render(){
      const { value } = this.state;
      let key = Object.keys(this.props.data)[value];
      return(
        <div className="stock-container">
          <div className="chart-title">
            <div>
              Stock Information: {this.props.symbol}
            </div>
            <button onClick={this.removeSymbol(this.props.symbol)}>X</button>
          </div>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Day" />
            <Tab label="Month" />
            <Tab label="3 Month" />
            <Tab label="6 Month" />
            <Tab label="1 Year" />
            <Tab label="2 Year" />
            <Tab label="5 Year" />
          </Tabs>
          <TabContainer>
            <Chart data={this.props.data[key].data}  />
          </TabContainer>
          <Book symbol={this.props.symbol} />
        </div>
      )
    }
}

Content.proptypes = {
  data: PropTypes.object.isRequired,
  symbol: PropTypes.string.isRequired,
  removeSymbol: PropTypes.func.isRequired
};

export default Content;
// {value === 0 && <TabContainer><Chart data={this.props.data['1d'].data}/></TabContainer>}
// { value === 1 && <TabContainer><Chart data={this.props.data['1m'].data} /></TabContainer>}
// { value === 2 && <TabContainer><Chart data={this.props.data['3m'].data} /></TabContainer>}
// { value === 3 && <TabContainer><Chart data={this.props.data['6m'].data} /></TabContainer>}
// { value === 4 && <TabContainer><Chart data={this.props.data['1y'].data} /></TabContainer>}
// { value === 5 && <TabContainer><Chart data={this.props.data['2y'].data} /></TabContainer>}
// { value === 6 && <TabContainer><Chart data={this.props.data['5y'].data} /></TabContainer>}
