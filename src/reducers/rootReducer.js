import { combineReducers } from 'redux';
import ui from './ui/uiReducer';
import symbols from './symbolReducer';
import books from './bookReducer';
import financials from './financialReducer';
export default combineReducers({
  ui,
  symbols,
  books,
  financials
})
