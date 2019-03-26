import { RECEIVE_BOOK_DATA, REMOVE_SYMBOL } from '../actions/apiActions';
const initialState = {};

const booksReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOK_DATA:
      if(!state[action.symbol]){
        return Object.assign({}, state,
          {
            [action.symbol]:
            {
                data: action.book_data
            }
          })
      }
      let newState = Object.assign({}, state);
      newState[action.symbol] = { data: action.chart_data }
      return newState;
    case REMOVE_SYMBOL:
      const { [action.symbol]: _, ...updatedState} = state;
      return updatedState;
    default:
      return state;
  }
};

export default booksReducer;
