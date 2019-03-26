import { makeRequest } from '../util/util';

export const RECEIVE_SYMBOLS = "RECEIVE_SYMBOLS";
export const REMOVE_SYMBOL = "REMOVE_SYMBOL"
export const RECEIVE_SYMBOL_DATA = "RECEIVE_SYMBOL_DATA";
export const SELECTED_SYMBOL = "SELECTED_SYMBOL";
export const RECEIVE_BOOK_DATA = "RECEIVE_BOOK_DATA"
export const RECEIVE_FINANCIAL_DATA = "RECEIVE_FINANCIAL_DATA";

export const receiveSymbols = (symbols) => {
  return (
    { type: RECEIVE_SYMBOLS, symbols}
  )
}

export const removeSymbol = (symbol) => {
  console.log('trigger');
  return (
    { type: REMOVE_SYMBOL, symbol}
  )
}

export const receiveSymbolData = (symbol, duration, chart_data) => {
  return (
    { type: RECEIVE_SYMBOL_DATA,symbol, duration, chart_data}
  )
}

export const receiveBookData = (symbol, book_data) => {
  return (
    {
      type: RECEIVE_BOOK_DATA, symbol, book_data
    }
  )
}

export const receiveFinancialData = (symbol, financial_data) => {
  return (
    { type: RECEIVE_FINANCIAL_DATA, symbol, financial_data }
  )
}

export const getBookData = (symbol) => dispatch => {
  makeRequest(
    {
      method: "GET",
      url: `https://api.iextrading.com/1.0/stock/${symbol}/book`,
      params: null
    }
  ).then((book_data) => {
    return dispatch(receiveBookData(symbol, JSON.parse(book_data)))
  })
  .catch((err) => {
    console.log("Get book data request failed: ", err);
    return 0;
  })
}

export const getSymbolData = (symbol, time_period) => dispatch => {
  let time_periods = ['1d', '1m', '3m', '6m', '1y', '2y', '5y'];
  makeRequest(
    {
      method: "GET",
      url:`https://api.iextrading.com/1.0/stock/${symbol}/chart/${time_period}`,
      params: null
    }
  ).then((chart_data) => {
    let index = time_periods.indexOf(time_period);
    if(index < 6){
      dispatch(getSymbolData(symbol, time_periods[index + 1]));
    }
    return dispatch(receiveSymbolData(symbol, time_period, JSON.parse(chart_data)))

  })
  .catch((err) => {
    console.error("Get symbol data request failed: ", err);
    return 0;
  })
}

export const getFinancials = (symbol) => dispatch => {
  makeRequest(
    {
      method: "GET",
      url: `https://api.iextrading.com/1.0/stock/${symbol}/financials`,
      params: null
    }
  ).then((financial_data) => {
    return dispatch(receiveFinancialData(symbol, JSON.parse(financial_data)))
  })
  .catch((err) => {
    console.error("Get Financial data request failed: ", err);
    return 0;
  })
}

export const selectedSymbol = (symbol) => {
  return (
    { type: "SELECTED_SYMBOL", symbol}
  )
}
export const getSymbols = () => dispatch => {
  makeRequest(
    {
      method: "GET",
      url: "https://api.iextrading.com/1.0/ref-data/symbols",
      params: null
    }
  )
  .then((symbols) => {
    return dispatch(receiveSymbols(JSON.parse(symbols)));
  })
  .catch((err) => {
    console.error("Get Symbols request failed: ", err);
    return 0;
  });
}
