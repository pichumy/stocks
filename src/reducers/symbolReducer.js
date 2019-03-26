import { RECEIVE_SYMBOLS, RECEIVE_SYMBOL_DATA, REMOVE_SYMBOL } from '../actions/apiActions';
const initialState = {};

const symbolsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SYMBOL_DATA:
      if(!state[action.symbol]){
        return Object.assign({}, state,
          {
            [action.symbol]:
            {
              [action.duration]:
              {
                data: action.chart_data
              }
            }
          })
      }
      let newState = Object.assign({}, state);
      newState[action.symbol][action.duration] = { data: action.chart_data }
      return newState;
    case REMOVE_SYMBOL:
      const { [action.symbol]: _, ...updatedState} = state;
      return updatedState;
    default:
      return state;
  }
};

export default symbolsReducer;
