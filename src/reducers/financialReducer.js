import { RECEIVE_FINANCIAL_DATA, REMOVE_SYMBOL } from '../actions/apiActions';
const initialState = {};

const financialReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FINANCIAL_DATA:
      if(!state[action.symbol]){
        return Object.assign({}, state,
          {
            [action.symbol]:
            {
                data: action.financial_data.financials
            }
          })
      }
      let newState = Object.assign({}, state);
      newState[action.symbol] = { data: action.financial_data.financials }
      return newState;
    case REMOVE_SYMBOL:
      const { [action.symbol]: _, ...updatedState} = state;
      return updatedState;
    default:
      return state;
  }
};

export default financialReducer;
