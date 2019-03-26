import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function createData(data){
  let keyList = [
    "totalRevenue",
    "costOfRevenue",
    "grossProfit",
    "researchAndDevelopment",
    "operatingExpense",
    "netIncome"
  ]
  // let keyList = Object.keys(data[0]);
  let rows = [];
  keyList.forEach(key => {
    let newRow = { name: key };
    data.forEach(dataPoint => {
      newRow[dataPoint.reportDate] = (dataPoint[key] / 1000000).toLocaleString('en');
    })
    rows.push(newRow);
  })
  return rows;
}

function unCamelCase(str){
    return str
        // insert a space between lower & upper
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // space before last upper in a sequence followed by lower
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

class financialData extends React.Component {

  constructor(props){
    super(props);
  }

  removeSymbol(symbol){
    return (e) => {
      this.props.removeSymbol(symbol);
    }
  }

  render(){
    const { classes, data, symbol } = this.props;
    const rows = createData(data);
    return(
      <div className="financial-container">
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="table-title">
                  <div>
                    {symbol} (Millions)
                  </div>
                  <button onClick={this.removeSymbol(this.props.symbol)}>X</button>
                </div>
              </TableCell>
              {
                data.map( (dataPoint, idx) =>(
                  <TableCell key={idx} align="right">{dataPoint.reportDate}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map( (row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {unCamelCase(row.name)}
                </TableCell>
                {Object.keys(row).map( (reportDate, idx2) => {
                  if(reportDate === "name"){
                    // skip, handled above.
                  }else{
                    return <TableCell key={idx2} align="right">{row[reportDate]}</TableCell>;
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(financialData);
